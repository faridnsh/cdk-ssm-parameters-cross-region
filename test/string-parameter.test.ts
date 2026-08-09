import { Stack } from "aws-cdk-lib";
import { Match, Template } from "aws-cdk-lib/assertions";
import { StringParameter } from "../src";

const ACCOUNT = "123456789012";
const REGION = "eu-central-1";
const PARAMETER_NAME = "/path/name/integ/test";
const PARAMETER_ARN = `arn:aws:ssm:${REGION}:${ACCOUNT}:parameter${PARAMETER_NAME}`;
const SYNTHESIZED_PARAMETER_ARN = {
  "Fn::Join": ["", ["arn:", { Ref: "AWS::Partition" }, `:ssm:${REGION}:${ACCOUNT}:parameter${PARAMETER_NAME}`]],
};

function customResourceCalls(template: Template): Record<string, unknown>[] {
  return Object.values(template.findResources("Custom::SSM_String_Parameter_Cross_Region")).map((resource: any) => ({
    create: JSON.parse(resource.Properties.Create),
    update: JSON.parse(resource.Properties.Update),
    delete: resource.Properties.Delete ? JSON.parse(resource.Properties.Delete) : undefined,
  }));
}

describe("StringParameter", () => {
  it("Should create and import parameter", () => {
    // Given
    const stack = new Stack(undefined, undefined, { env: { account: ACCOUNT, region: "us-east-1" } });

    // When
    const putParameter = new StringParameter(stack, "PutParameter", {
      region: REGION,
      parameterName: PARAMETER_NAME,
      stringValue: "Say hello from another region",
    });
    const getParameter = StringParameter.fromStringParameterName(stack, "GetParameter", REGION, PARAMETER_NAME);
    getParameter.node.addDependency(putParameter);

    // When import by ARN
    const getByArn = StringParameter.fromStringParameterArn(stack, "GetByArn", PARAMETER_ARN);
    getByArn.node.addDependency(putParameter);

    // Then
    const template = Template.fromStack(stack);
    expect(template).toMatchSnapshot();
  });

  it("scopes an ARN-based reader to the supplied ARN and calls GetParameter with that ARN in its region", () => {
    const stack = new Stack(undefined, undefined, { env: { account: ACCOUNT, region: "us-east-1" } });
    StringParameter.fromStringParameterArn(stack, "GetByArn", PARAMETER_ARN);

    const template = Template.fromStack(stack);
    template.hasResourceProperties("AWS::IAM::Policy", {
      PolicyDocument: {
        Statement: [
          {
            Action: "ssm:GetParameter",
            Effect: "Allow",
            Resource: PARAMETER_ARN,
          },
        ],
      },
    });

    const calls = customResourceCalls(template);
    expect(calls).toHaveLength(1);
    expect(calls[0]).toMatchObject({
      create: {
        region: REGION,
        action: "getParameter",
        parameters: { Name: PARAMETER_ARN },
      },
      update: {
        region: REGION,
        action: "getParameter",
        parameters: { Name: PARAMETER_ARN },
      },
    });
  });

  it("scopes an attributes-based versioned read to the unversioned parameter ARN", () => {
    const stack = new Stack(undefined, undefined, { env: { account: ACCOUNT, region: "us-east-1" } });
    StringParameter.fromStringParameterAttributes(stack, "GetByAttributes", {
      region: REGION,
      parameterName: PARAMETER_NAME,
      version: 42,
    });

    const template = Template.fromStack(stack);
    template.hasResourceProperties("AWS::IAM::Policy", {
      PolicyDocument: {
        Statement: [
          {
            Action: "ssm:GetParameter",
            Effect: "Allow",
            Resource: SYNTHESIZED_PARAMETER_ARN,
          },
        ],
      },
    });
    const resources = template.findResources("Custom::SSM_String_Parameter_Cross_Region");
    const createCall = JSON.stringify(Object.values(resources)[0].Properties.Create);
    expect(createCall).toContain(PARAMETER_NAME);
    expect(createCall).toContain(":42");
  });

  it("scopes a name-based cross-region reader to the constructed parameter ARN", () => {
    const stack = new Stack(undefined, undefined, { env: { account: ACCOUNT, region: "us-east-1" } });
    StringParameter.fromStringParameterName(stack, "GetByName", REGION, PARAMETER_NAME);

    Template.fromStack(stack).hasResourceProperties("AWS::IAM::Policy", {
      PolicyDocument: {
        Statement: [
          {
            Action: "ssm:GetParameter",
            Effect: "Allow",
            Resource: SYNTHESIZED_PARAMETER_ARN,
          },
        ],
      },
    });
  });

  it("scopes parameter creation, update, and deletion to the created parameter ARN", () => {
    const stack = new Stack(undefined, undefined, { env: { account: ACCOUNT, region: "us-east-1" } });
    new StringParameter(stack, "Parameter", {
      region: REGION,
      parameterName: PARAMETER_NAME,
      stringValue: "value",
    });

    Template.fromStack(stack).hasResourceProperties("AWS::IAM::Policy", {
      PolicyDocument: {
        Statement: Match.arrayWith([
          Match.objectLike({
            Action: "ssm:PutParameter",
            Effect: "Allow",
            Resource: SYNTHESIZED_PARAMETER_ARN,
          }),
          Match.objectLike({
            Action: "ssm:DeleteParameter",
            Effect: "Allow",
            Resource: SYNTHESIZED_PARAMETER_ARN,
          }),
        ]),
      },
    });
  });

  it("never synthesizes a wildcard IAM resource", () => {
    const stack = new Stack(undefined, undefined, { env: { account: ACCOUNT, region: "us-east-1" } });
    new StringParameter(stack, "Parameter", {
      region: REGION,
      parameterName: PARAMETER_NAME,
      stringValue: "value",
    });
    StringParameter.fromStringParameterName(stack, "GetByName", REGION, PARAMETER_NAME);
    StringParameter.fromStringParameterArn(stack, "GetByArn", PARAMETER_ARN);

    const policies = Template.fromStack(stack).findResources("AWS::IAM::Policy");
    const statements = Object.values(policies).flatMap((policy: any) => policy.Properties.PolicyDocument.Statement);
    const resources = statements.flatMap((statement: any) =>
      Array.isArray(statement.Resource) ? statement.Resource : [statement.Resource]
    );
    expect(statements).not.toHaveLength(0);
    expect(resources).not.toContain("*");
  });
});

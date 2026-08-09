# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StringParameter <a name="StringParameter" id="@faridnsh/cdk-ssm-parameters-cross-region.StringParameter"></a>

- *Implements:* aws-cdk-lib.aws_ssm.IStringParameter, aws-cdk-lib.aws_ssm.IParameter

#### Initializers <a name="Initializers" id="@faridnsh/cdk-ssm-parameters-cross-region.StringParameter.Initializer"></a>

```typescript
import { StringParameter } from '@faridnsh/cdk-ssm-parameters-cross-region'

new StringParameter(scope: Construct, id: string, props: StringParameterProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@faridnsh/cdk-ssm-parameters-cross-region.StringParameter.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@faridnsh/cdk-ssm-parameters-cross-region.StringParameter.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@faridnsh/cdk-ssm-parameters-cross-region.StringParameter.Initializer.parameter.props">props</a></code> | <code><a href="#@faridnsh/cdk-ssm-parameters-cross-region.StringParameterProps">StringParameterProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@faridnsh/cdk-ssm-parameters-cross-region.StringParameter.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@faridnsh/cdk-ssm-parameters-cross-region.StringParameter.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@faridnsh/cdk-ssm-parameters-cross-region.StringParameter.Initializer.parameter.props"></a>

- *Type:* <a href="#@faridnsh/cdk-ssm-parameters-cross-region.StringParameterProps">StringParameterProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@faridnsh/cdk-ssm-parameters-cross-region.StringParameter.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@faridnsh/cdk-ssm-parameters-cross-region.StringParameter.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#@faridnsh/cdk-ssm-parameters-cross-region.StringParameter.grantRead">grantRead</a></code> | Grants read (DescribeParameter, GetParameter, GetParameterHistory) permissions on the SSM Parameter. |
| <code><a href="#@faridnsh/cdk-ssm-parameters-cross-region.StringParameter.grantWrite">grantWrite</a></code> | Grants write (PutParameter) permissions on the SSM Parameter. |

---

##### `toString` <a name="toString" id="@faridnsh/cdk-ssm-parameters-cross-region.StringParameter.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="@faridnsh/cdk-ssm-parameters-cross-region.StringParameter.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="@faridnsh/cdk-ssm-parameters-cross-region.StringParameter.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `grantRead` <a name="grantRead" id="@faridnsh/cdk-ssm-parameters-cross-region.StringParameter.grantRead"></a>

```typescript
public grantRead(grantee: IGrantable): Grant
```

Grants read (DescribeParameter, GetParameter, GetParameterHistory) permissions on the SSM Parameter.

###### `grantee`<sup>Required</sup> <a name="grantee" id="@faridnsh/cdk-ssm-parameters-cross-region.StringParameter.grantRead.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

##### `grantWrite` <a name="grantWrite" id="@faridnsh/cdk-ssm-parameters-cross-region.StringParameter.grantWrite"></a>

```typescript
public grantWrite(grantee: IGrantable): Grant
```

Grants write (PutParameter) permissions on the SSM Parameter.

###### `grantee`<sup>Required</sup> <a name="grantee" id="@faridnsh/cdk-ssm-parameters-cross-region.StringParameter.grantWrite.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@faridnsh/cdk-ssm-parameters-cross-region.StringParameter.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@faridnsh/cdk-ssm-parameters-cross-region.StringParameter.isResource">isResource</a></code> | Check whether the given construct is a Resource. |
| <code><a href="#@faridnsh/cdk-ssm-parameters-cross-region.StringParameter.fromStringParameterArn">fromStringParameterArn</a></code> | Imports an external string parameter by ARN. |
| <code><a href="#@faridnsh/cdk-ssm-parameters-cross-region.StringParameter.fromStringParameterAttributes">fromStringParameterAttributes</a></code> | Imports an external string parameter with name and optional version. |
| <code><a href="#@faridnsh/cdk-ssm-parameters-cross-region.StringParameter.fromStringParameterName">fromStringParameterName</a></code> | Imports an external string parameter by name and region. |
| <code><a href="#@faridnsh/cdk-ssm-parameters-cross-region.StringParameter.valueFromLookup">valueFromLookup</a></code> | Reads the value of an SSM parameter during synthesis through an environmental context provider. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@faridnsh/cdk-ssm-parameters-cross-region.StringParameter.isConstruct"></a>

```typescript
import { StringParameter } from '@faridnsh/cdk-ssm-parameters-cross-region'

StringParameter.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@faridnsh/cdk-ssm-parameters-cross-region.StringParameter.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isResource` <a name="isResource" id="@faridnsh/cdk-ssm-parameters-cross-region.StringParameter.isResource"></a>

```typescript
import { StringParameter } from '@faridnsh/cdk-ssm-parameters-cross-region'

StringParameter.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="@faridnsh/cdk-ssm-parameters-cross-region.StringParameter.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `fromStringParameterArn` <a name="fromStringParameterArn" id="@faridnsh/cdk-ssm-parameters-cross-region.StringParameter.fromStringParameterArn"></a>

```typescript
import { StringParameter } from '@faridnsh/cdk-ssm-parameters-cross-region'

StringParameter.fromStringParameterArn(scope: Construct, id: string, arn: string)
```

Imports an external string parameter by ARN.

Cross-account reads require an Advanced-tier parameter shared with the
reading account through AWS Resource Access Manager (AWS RAM). The full
ARN is passed to GetParameter; this construct does not assume a role.

###### `scope`<sup>Required</sup> <a name="scope" id="@faridnsh/cdk-ssm-parameters-cross-region.StringParameter.fromStringParameterArn.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="@faridnsh/cdk-ssm-parameters-cross-region.StringParameter.fromStringParameterArn.parameter.id"></a>

- *Type:* string

---

###### `arn`<sup>Required</sup> <a name="arn" id="@faridnsh/cdk-ssm-parameters-cross-region.StringParameter.fromStringParameterArn.parameter.arn"></a>

- *Type:* string

---

##### `fromStringParameterAttributes` <a name="fromStringParameterAttributes" id="@faridnsh/cdk-ssm-parameters-cross-region.StringParameter.fromStringParameterAttributes"></a>

```typescript
import { StringParameter } from '@faridnsh/cdk-ssm-parameters-cross-region'

StringParameter.fromStringParameterAttributes(scope: Construct, id: string, attrs: StringParameterAttributes)
```

Imports an external string parameter with name and optional version.

###### `scope`<sup>Required</sup> <a name="scope" id="@faridnsh/cdk-ssm-parameters-cross-region.StringParameter.fromStringParameterAttributes.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="@faridnsh/cdk-ssm-parameters-cross-region.StringParameter.fromStringParameterAttributes.parameter.id"></a>

- *Type:* string

---

###### `attrs`<sup>Required</sup> <a name="attrs" id="@faridnsh/cdk-ssm-parameters-cross-region.StringParameter.fromStringParameterAttributes.parameter.attrs"></a>

- *Type:* <a href="#@faridnsh/cdk-ssm-parameters-cross-region.StringParameterAttributes">StringParameterAttributes</a>

---

##### `fromStringParameterName` <a name="fromStringParameterName" id="@faridnsh/cdk-ssm-parameters-cross-region.StringParameter.fromStringParameterName"></a>

```typescript
import { StringParameter } from '@faridnsh/cdk-ssm-parameters-cross-region'

StringParameter.fromStringParameterName(scope: Construct, id: string, region: string, parameterName: string)
```

Imports an external string parameter by name and region.

###### `scope`<sup>Required</sup> <a name="scope" id="@faridnsh/cdk-ssm-parameters-cross-region.StringParameter.fromStringParameterName.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="@faridnsh/cdk-ssm-parameters-cross-region.StringParameter.fromStringParameterName.parameter.id"></a>

- *Type:* string

---

###### `region`<sup>Required</sup> <a name="region" id="@faridnsh/cdk-ssm-parameters-cross-region.StringParameter.fromStringParameterName.parameter.region"></a>

- *Type:* string

---

###### `parameterName`<sup>Required</sup> <a name="parameterName" id="@faridnsh/cdk-ssm-parameters-cross-region.StringParameter.fromStringParameterName.parameter.parameterName"></a>

- *Type:* string

---

##### `valueFromLookup` <a name="valueFromLookup" id="@faridnsh/cdk-ssm-parameters-cross-region.StringParameter.valueFromLookup"></a>

```typescript
import { StringParameter } from '@faridnsh/cdk-ssm-parameters-cross-region'

StringParameter.valueFromLookup(scope: Construct, region: string, parameterName: string)
```

Reads the value of an SSM parameter during synthesis through an environmental context provider.

Requires that the stack this scope is defined in will have explicit
account information. Otherwise, it will fail during synthesis.

###### `scope`<sup>Required</sup> <a name="scope" id="@faridnsh/cdk-ssm-parameters-cross-region.StringParameter.valueFromLookup.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `region`<sup>Required</sup> <a name="region" id="@faridnsh/cdk-ssm-parameters-cross-region.StringParameter.valueFromLookup.parameter.region"></a>

- *Type:* string

---

###### `parameterName`<sup>Required</sup> <a name="parameterName" id="@faridnsh/cdk-ssm-parameters-cross-region.StringParameter.valueFromLookup.parameter.parameterName"></a>

- *Type:* string

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@faridnsh/cdk-ssm-parameters-cross-region.StringParameter.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@faridnsh/cdk-ssm-parameters-cross-region.StringParameter.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@faridnsh/cdk-ssm-parameters-cross-region.StringParameter.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@faridnsh/cdk-ssm-parameters-cross-region.StringParameter.property.parameterArn">parameterArn</a></code> | <code>string</code> | The ARN of the SSM Parameter resource. |
| <code><a href="#@faridnsh/cdk-ssm-parameters-cross-region.StringParameter.property.parameterName">parameterName</a></code> | <code>string</code> | The name of the SSM Parameter resource. |
| <code><a href="#@faridnsh/cdk-ssm-parameters-cross-region.StringParameter.property.parameterType">parameterType</a></code> | <code>string</code> | The type of the SSM Parameter resource. |
| <code><a href="#@faridnsh/cdk-ssm-parameters-cross-region.StringParameter.property.stringValue">stringValue</a></code> | <code>string</code> | The parameter value. |
| <code><a href="#@faridnsh/cdk-ssm-parameters-cross-region.StringParameter.property.tags">tags</a></code> | <code>aws-cdk-lib.TagManager</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@faridnsh/cdk-ssm-parameters-cross-region.StringParameter.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="@faridnsh/cdk-ssm-parameters-cross-region.StringParameter.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="@faridnsh/cdk-ssm-parameters-cross-region.StringParameter.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `parameterArn`<sup>Required</sup> <a name="parameterArn" id="@faridnsh/cdk-ssm-parameters-cross-region.StringParameter.property.parameterArn"></a>

```typescript
public readonly parameterArn: string;
```

- *Type:* string

The ARN of the SSM Parameter resource.

---

##### `parameterName`<sup>Required</sup> <a name="parameterName" id="@faridnsh/cdk-ssm-parameters-cross-region.StringParameter.property.parameterName"></a>

```typescript
public readonly parameterName: string;
```

- *Type:* string

The name of the SSM Parameter resource.

---

##### `parameterType`<sup>Required</sup> <a name="parameterType" id="@faridnsh/cdk-ssm-parameters-cross-region.StringParameter.property.parameterType"></a>

```typescript
public readonly parameterType: string;
```

- *Type:* string

The type of the SSM Parameter resource.

---

##### `stringValue`<sup>Required</sup> <a name="stringValue" id="@faridnsh/cdk-ssm-parameters-cross-region.StringParameter.property.stringValue"></a>

```typescript
public readonly stringValue: string;
```

- *Type:* string

The parameter value.

Value must not nest another parameter. Do not use {{}} in the value.

---

##### `tags`<sup>Required</sup> <a name="tags" id="@faridnsh/cdk-ssm-parameters-cross-region.StringParameter.property.tags"></a>

```typescript
public readonly tags: TagManager;
```

- *Type:* aws-cdk-lib.TagManager

---


## Structs <a name="Structs" id="Structs"></a>

### StringParameterAttributes <a name="StringParameterAttributes" id="@faridnsh/cdk-ssm-parameters-cross-region.StringParameterAttributes"></a>

#### Initializer <a name="Initializer" id="@faridnsh/cdk-ssm-parameters-cross-region.StringParameterAttributes.Initializer"></a>

```typescript
import { StringParameterAttributes } from '@faridnsh/cdk-ssm-parameters-cross-region'

const stringParameterAttributes: StringParameterAttributes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@faridnsh/cdk-ssm-parameters-cross-region.StringParameterAttributes.property.parameterArn">parameterArn</a></code> | <code>string</code> | The ARN of the parameter. |
| <code><a href="#@faridnsh/cdk-ssm-parameters-cross-region.StringParameterAttributes.property.parameterName">parameterName</a></code> | <code>string</code> | The name of the parameter store value if not using ARN. |
| <code><a href="#@faridnsh/cdk-ssm-parameters-cross-region.StringParameterAttributes.property.region">region</a></code> | <code>string</code> | The region to retrieve the parameter from. |
| <code><a href="#@faridnsh/cdk-ssm-parameters-cross-region.StringParameterAttributes.property.simpleName">simpleName</a></code> | <code>boolean</code> | Indicates of the parameter name is a simple name (i.e. does not include "/" separators). |
| <code><a href="#@faridnsh/cdk-ssm-parameters-cross-region.StringParameterAttributes.property.type">type</a></code> | <code>aws-cdk-lib.aws_ssm.ParameterType</code> | The type of the string parameter. |
| <code><a href="#@faridnsh/cdk-ssm-parameters-cross-region.StringParameterAttributes.property.version">version</a></code> | <code>number</code> | The version number of the value you wish to retrieve. |

---

##### `parameterArn`<sup>Optional</sup> <a name="parameterArn" id="@faridnsh/cdk-ssm-parameters-cross-region.StringParameterAttributes.property.parameterArn"></a>

```typescript
public readonly parameterArn: string;
```

- *Type:* string

The ARN of the parameter.

Use this or parameterName, but not both.
If ARN is provided, region and account will be extracted from it.

---

##### `parameterName`<sup>Optional</sup> <a name="parameterName" id="@faridnsh/cdk-ssm-parameters-cross-region.StringParameterAttributes.property.parameterName"></a>

```typescript
public readonly parameterName: string;
```

- *Type:* string

The name of the parameter store value if not using ARN.

This value can be a token or a concrete string. If it is a concrete string
and includes "/" it must also be prefixed with a "/" (fully-qualified).

---

##### `region`<sup>Optional</sup> <a name="region" id="@faridnsh/cdk-ssm-parameters-cross-region.StringParameterAttributes.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The region to retrieve the parameter from.

See AWS.SSM.region for more information.

---

##### `simpleName`<sup>Optional</sup> <a name="simpleName" id="@faridnsh/cdk-ssm-parameters-cross-region.StringParameterAttributes.property.simpleName"></a>

```typescript
public readonly simpleName: boolean;
```

- *Type:* boolean
- *Default:* auto-detect based on `parameterName`

Indicates of the parameter name is a simple name (i.e. does not include "/" separators).

This is only required only if `parameterName` is a token, which means we
are unable to detect if the name is simple or "path-like" for the purpose
of rendering SSM parameter ARNs.

If `parameterName` is not specified, this value is ignored.

---

##### `type`<sup>Optional</sup> <a name="type" id="@faridnsh/cdk-ssm-parameters-cross-region.StringParameterAttributes.property.type"></a>

```typescript
public readonly type: ParameterType;
```

- *Type:* aws-cdk-lib.aws_ssm.ParameterType
- *Default:* ParameterType.STRING

The type of the string parameter.

---

##### `version`<sup>Optional</sup> <a name="version" id="@faridnsh/cdk-ssm-parameters-cross-region.StringParameterAttributes.property.version"></a>

```typescript
public readonly version: number;
```

- *Type:* number
- *Default:* The latest version will be retrieved.

The version number of the value you wish to retrieve.

---

### StringParameterProps <a name="StringParameterProps" id="@faridnsh/cdk-ssm-parameters-cross-region.StringParameterProps"></a>

Properties needed to create a String SSM parameter.

#### Initializer <a name="Initializer" id="@faridnsh/cdk-ssm-parameters-cross-region.StringParameterProps.Initializer"></a>

```typescript
import { StringParameterProps } from '@faridnsh/cdk-ssm-parameters-cross-region'

const stringParameterProps: StringParameterProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@faridnsh/cdk-ssm-parameters-cross-region.StringParameterProps.property.parameterName">parameterName</a></code> | <code>string</code> | The name of the parameter. |
| <code><a href="#@faridnsh/cdk-ssm-parameters-cross-region.StringParameterProps.property.region">region</a></code> | <code>string</code> | The region to create the parameter in. |
| <code><a href="#@faridnsh/cdk-ssm-parameters-cross-region.StringParameterProps.property.stringValue">stringValue</a></code> | <code>string</code> | The value of the parameter. |
| <code><a href="#@faridnsh/cdk-ssm-parameters-cross-region.StringParameterProps.property.allowedPattern">allowedPattern</a></code> | <code>string</code> | A regular expression used to validate the parameter value. |
| <code><a href="#@faridnsh/cdk-ssm-parameters-cross-region.StringParameterProps.property.dataType">dataType</a></code> | <code>aws-cdk-lib.aws_ssm.ParameterDataType</code> | The data type of the parameter, such as `text` or `aws:ec2:image`. |
| <code><a href="#@faridnsh/cdk-ssm-parameters-cross-region.StringParameterProps.property.description">description</a></code> | <code>string</code> | Information about the parameter that you want to add to the system. |
| <code><a href="#@faridnsh/cdk-ssm-parameters-cross-region.StringParameterProps.property.removalPolicy">removalPolicy</a></code> | <code>aws-cdk-lib.RemovalPolicy</code> | Whether to retain or delete the parameter on CloudFormation delete event. |
| <code><a href="#@faridnsh/cdk-ssm-parameters-cross-region.StringParameterProps.property.tier">tier</a></code> | <code>aws-cdk-lib.aws_ssm.ParameterTier</code> | The tier of the string parameter. |

---

##### `parameterName`<sup>Required</sup> <a name="parameterName" id="@faridnsh/cdk-ssm-parameters-cross-region.StringParameterProps.property.parameterName"></a>

```typescript
public readonly parameterName: string;
```

- *Type:* string
- *Default:* a name will be generated by CloudFormation

The name of the parameter.

It may not be a

---

##### `region`<sup>Required</sup> <a name="region" id="@faridnsh/cdk-ssm-parameters-cross-region.StringParameterProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The region to create the parameter in.

See AWS.SSM.region for more information.

---

##### `stringValue`<sup>Required</sup> <a name="stringValue" id="@faridnsh/cdk-ssm-parameters-cross-region.StringParameterProps.property.stringValue"></a>

```typescript
public readonly stringValue: string;
```

- *Type:* string

The value of the parameter.

It may not reference another parameter and ``{{}}`` cannot be used in the value.

---

##### `allowedPattern`<sup>Optional</sup> <a name="allowedPattern" id="@faridnsh/cdk-ssm-parameters-cross-region.StringParameterProps.property.allowedPattern"></a>

```typescript
public readonly allowedPattern: string;
```

- *Type:* string
- *Default:* undefined, no validation is performed

A regular expression used to validate the parameter value.

---

##### `dataType`<sup>Optional</sup> <a name="dataType" id="@faridnsh/cdk-ssm-parameters-cross-region.StringParameterProps.property.dataType"></a>

```typescript
public readonly dataType: ParameterDataType;
```

- *Type:* aws-cdk-lib.aws_ssm.ParameterDataType
- *Default:* undefined

The data type of the parameter, such as `text` or `aws:ec2:image`.

---

##### `description`<sup>Optional</sup> <a name="description" id="@faridnsh/cdk-ssm-parameters-cross-region.StringParameterProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* undefined

Information about the parameter that you want to add to the system.

---

##### `removalPolicy`<sup>Optional</sup> <a name="removalPolicy" id="@faridnsh/cdk-ssm-parameters-cross-region.StringParameterProps.property.removalPolicy"></a>

```typescript
public readonly removalPolicy: RemovalPolicy;
```

- *Type:* aws-cdk-lib.RemovalPolicy
- *Default:* DESTROY

Whether to retain or delete the parameter on CloudFormation delete event.

---

##### `tier`<sup>Optional</sup> <a name="tier" id="@faridnsh/cdk-ssm-parameters-cross-region.StringParameterProps.property.tier"></a>

```typescript
public readonly tier: ParameterTier;
```

- *Type:* aws-cdk-lib.aws_ssm.ParameterTier
- *Default:* undefined

The tier of the string parameter.

---




[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://makeapullrequest.com)
[![GitHub](https://img.shields.io/github/license/faridnsh/cdk-ssm-parameters-cross-region?style=flat-square)](https://github.com/faridnsh/cdk-ssm-parameters-cross-region/blob/main/LICENSE)
[![npm (scoped)](https://img.shields.io/npm/v/@faridnsh/cdk-ssm-parameters-cross-region?style=flat-square)](https://www.npmjs.com/package/@faridnsh/cdk-ssm-parameters-cross-region)
[![GitHub Workflow Status (branch)](https://img.shields.io/github/actions/workflow/status/faridnsh/cdk-ssm-parameters-cross-region/release.yml?branch=main&label=release&style=flat-square)](https://github.com/faridnsh/cdk-ssm-parameters-cross-region/actions/workflows/release.yml)
[![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/faridnsh/cdk-ssm-parameters-cross-region?sort=semver&style=flat-square)](https://github.com/faridnsh/cdk-ssm-parameters-cross-region/releases)
[![Gitpod ready-to-code](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod&style=flat-square)](https://gitpod.io/#https://github.com/faridnsh/cdk-ssm-parameters-cross-region)

# CDK SSM Parameters cross-region

## What this fork adds

Compared with [the original `@pepperize/cdk-ssm-parameters-cross-region`](https://github.com/pepperize/cdk-ssm-parameters-cross-region), this fork adds:

- `StringParameter.fromStringParameterArn` for ARN-based reads, including cross-account parameters shared through AWS RAM.
- Least-privilege IAM policies for all custom-resource SSM calls. Reads, creates, updates, and deletes are restricted to the exact parameter ARN instead of `Resource: "*"`.

Store, read and lookup AWS SSM Parameters cross-region

> Currently, only supports StringParameter except simple name. Implements `aws_ssm.IParameter` and can be used as `aws_ssm.StringParameter` replacement.

## Install

### TypeScript

```shell
npm install @faridnsh/cdk-ssm-parameters-cross-region
```

or

```shell
yarn add @faridnsh/cdk-ssm-parameters-cross-region
```

## Usage

### Store AWS SSM Parameter cross-region

```typescript
import { StringParameter } from "@faridnsh/cdk-ssm-parameters-cross-region";

new StringParameter(scope, "PutParameter", {
  region: "eu-central-1",
  parameterName: "/path/name/example",
  stringValue: "Say hello from another region",
});
```

See [StringParameter](https://github.com/faridnsh/cdk-ssm-parameters-cross-region/blob/main/API.md#stringparameter-)

### Read AWS SSM Parameter cross-region

```typescript
import { StringParameter } from "@faridnsh/cdk-ssm-parameters-cross-region";

StringParameter.fromStringParameterName(scope, "GetParameter", "eu-central-1", "/path/name/example");
```

### Import AWS SSM Parameter cross-region by ARN

```typescript
import { StringParameter } from "@faridnsh/cdk-ssm-parameters-cross-region";

const arn = Stack.of(scope).formatArn({
  service: "ssm",
  resource: `parameter/path/name/example`,
  region: "eu-central-1",
  account: "123456789012",
});
StringParameter.fromStringParameterArn(scope, "GetByArn", arn);
```

Cross-account reads require an **Advanced-tier** SSM parameter shared with the reading account through **AWS Resource Access Manager (AWS RAM)**. The full shared parameter ARN is sent to `GetParameter`; no assumed role is required by this construct.

### Lookup AWS SSM Parameter cross-region

```typescript
import { StringParameter } from "@faridnsh/cdk-ssm-parameters-cross-region";

StringParameter.valueFromLookup(scope, "eu-central-1", "/path/name/example");
```

See [StringParameter.valueFromLookup](https://github.com/faridnsh/cdk-ssm-parameters-cross-region/blob/main/API.md#valuefromlookup-)

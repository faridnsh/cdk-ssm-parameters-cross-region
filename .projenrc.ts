import { AwsCdkConstructLibrary } from "@pepperize/projen-awscdk-construct";
import { javascript } from "projen";

const project = new AwsCdkConstructLibrary({
  author: "Farid Nouri Neshat",
  authorAddress: "faridnsh@gmail.com",
  cdkVersion: "2.1.0",
  devDeps: ["@pepperize/projen-awscdk-construct@~0.0.730"],
  name: "@faridnsh/cdk-ssm-parameters-cross-region",
  description: "Store, read and lookup AWS SSM Parameters cross-region",
  keywords: ["aws", "cdk", "ssm", "parameter", "parameter-store", "cross-region", "utilities"],
  repositoryUrl: "https://github.com/faridnsh/cdk-ssm-parameters-cross-region.git",

  projenrcTs: true,

  defaultReleaseBranch: "main",
  releaseToNpm: true,
  npmAccess: javascript.NpmAccess.PUBLIC,

  gitpod: true,
});

project.addDevDeps("@types/prettier@2.6.0");
const jestVersion = "^27";
project.addDevDeps(`@types/jest@${jestVersion}`);
project.addDevDeps(`jest@${jestVersion}`);
project.addDevDeps(`ts-jest@${jestVersion}`);

project.gitpod?.addCustomTask({
  name: "setup",
  init: "yarn install && npx projen build",
  command: "npx projen watch",
});

project.gitpod?.addVscodeExtensions("dbaeumer.vscode-eslint");

project.addPackageIgnore("/.claude/");
project.addPackageIgnore("/.editorconfig");
project.addPackageIgnore("/.gitpod.yml");
project.addPackageIgnore("/lib/integ.default.*");

project.synth();

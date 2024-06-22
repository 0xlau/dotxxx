import { kv } from "../types";

const varl: kv = {
  label: ".varl",
  description: "let name = expr;",
  javascript: "let ${1:variableName} = {{TEXT}};",
  typescript: "let ${1:variableName} = {{TEXT}};",
  javascriptreact: "let ${1:variableName} = {{TEXT}};",
  typescriptreact: "let ${1:variableName} = {{TEXT}};",
};

export default varl;

import { kv } from "../types";

const _var: kv = {
  label: ".var",
  description: "var name = expr;",
  javascript: "var ${1:variableName} = {{TEXT}};",
  typescript: "var ${1:variableName} = {{TEXT}};",
  javascriptreact: "var ${1:variableName} = {{TEXT}};",
  typescriptreact: "var ${1:variableName} = {{TEXT}};",
};

export default _var;

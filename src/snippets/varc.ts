import { kv } from "../types";

const varc: kv = {
  label: ".varc",
  description: "const name = expr;",
  javascript: "const ${1:variableName} = {{TEXT}};",
  typescript: "const ${1:variableName} = {{TEXT}};",
  javascriptreact: "const ${1:variableName} = {{TEXT}};",
  typescriptreact: "const ${1:variableName} = {{TEXT}};",
};

export default varc;

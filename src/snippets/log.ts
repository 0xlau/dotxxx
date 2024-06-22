import { kv } from "../types";

const log: kv = {
  label: ".log",
  description: "console.log(expr);",
  javascript: "console.log({{TEXT}});",
  typescript: "console.log({{TEXT}});",
  javascriptreact: "console.log({{TEXT}});",
  typescriptreact: "console.log({{TEXT}});",
};

export default log;

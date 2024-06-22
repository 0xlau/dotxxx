import { kv } from "../types";

const _while: kv = {
  label: ".while",
  description: "while (expr)",
  javascript: "while ({{TEXT}}) {\n{{indent}}${1:// Todo While}\n}",
  typescript: "while ({{TEXT}}) {\n{{indent}}${1:// Todo While}\n}",
  javascriptreact: "while ({{TEXT}}) {\n{{indent}}${1:// Todo While}\n}",
  typescriptreact: "while ({{TEXT}}) {\n{{indent}}${1:// Todo While}\n}",
};

export default _while;

import { kv } from "../types";

const _if: kv = {
  label: ".if",
  description: "if (expr)",
  javascript: "if ({{TEXT}}) {\n{{indent}}${1:// Todo If}\n}",
  typescript: "if ({{TEXT}}) {\n{{indent}}${1:// Todo If}\n}",
  javascriptreact: "if ({{TEXT}}) {\n{{indent}}${1:// Todo If}\n}",
  typescriptreact: "if ({{TEXT}}) {\n{{indent}}${1:// Todo If}\n}",
};

export default _if;

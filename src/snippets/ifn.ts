import { kv } from "../types";

const ifn: kv = {
  label: ".ifn",
  description: "if (!expr)",
  javascript: "if (!({{TEXT}})) {\n{{indent}}${1:// Todo}\n}",
  typescript: "if (!({{TEXT}})) {\n{{indent}}${1:// Todo}\n}",
  javascriptreact: "if (!({{TEXT}})) {\n{{indent}}${1:// Todo}\n}",
  typescriptreact: "if (!({{TEXT}})) {\n{{indent}}${1:// Todo}\n}",
};

export default ifn;

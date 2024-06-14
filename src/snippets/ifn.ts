import { kv } from "../types";

const ifn: kv = {
  label: ".ifn",
  javascript: "if (!({{TEXT}})) {\n{{indent}}${1:// Todo}\n}",
  typescript: "if (!({{TEXT}})) {\n{{indent}}${1:// Todo}\n}",
};

export default ifn;

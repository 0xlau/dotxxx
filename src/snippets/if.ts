import { kv } from "../types";

const _if: kv = {
  label: ".if",
  javascript: "if ({{TEXT}}) {\n{{indent}}${1:// Todo If}\n}",
  typescript: "if ({{TEXT}}) {\n{{indent}}${1:// Todo If}\n}",
};

export default _if;

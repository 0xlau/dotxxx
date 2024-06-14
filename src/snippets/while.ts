import { kv } from "../types";

const _while: kv = {
  label: ".while",
  javascript: "while ({{TEXT}}) {\n{{indent}}${1:// Todo While}\n}",
  typescript: "while ({{TEXT}}) {\n{{indent}}${1:// Todo While}\n}",
};

export default _while;

import { kv } from "../types";

const _try: kv = {
  label: ".try",
  description: "try {(expr)}",
  javascript: "try {\n{{indent}}{{TEXT}}\n} catch (e) {\n{{indent}}${1:// Todo Catch}\n}",
  typescript: "try {\n{{indent}}{{TEXT}}\n} catch (e: ${1:Exception}) {\n{{indent}}${2:// Todo Catch}\n}",
  javascriptreact: "try {\n{{indent}}{{TEXT}}\n} catch (e) {\n{{indent}}${1:// Todo Catch}\n}",
  typescriptreact: "try {\n{{indent}}{{TEXT}}\n} catch (e: ${1:Exception}) {\n{{indent}}${2:// Todo Catch}\n}",
};

export default _try;

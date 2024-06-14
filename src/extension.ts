import * as vscode from "vscode";
import snippets from "./snippets";

export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.languages.registerCompletionItemProvider(
    { pattern: "**/*" },
    {
      provideCompletionItems(
        document: vscode.TextDocument,
        position: vscode.Position
      ) {
        const completionItems = [];
        const linePrefix = document
          .lineAt(position)
          .text.substring(0, position.character);
        const indent = linePrefix.match(/^\s*/)?.[0] || "";
        const lineCode = linePrefix
          .substring(0, linePrefix.length - 1)
          .replaceAll(indent, "");
        if (lineCode.length === 0) {
          return undefined;
        }
        console.log(linePrefix.length, linePrefix, lineCode);
        if (linePrefix.endsWith(".")) {
          for (const snippet of snippets) {
            const snippetText = snippet[document.languageId];
            const snippetLabel = snippet["label"];
            if (!snippetText) {
              continue;
            }
            const completionItem = new vscode.CompletionItem(
              snippetLabel,
              vscode.CompletionItemKind.Snippet
            );
            completionItem.insertText = new vscode.SnippetString(
              `${indent}${snippetText
                .replaceAll("\n", `\n${indent}`)
                .replaceAll("{{TEXT}}", lineCode)
                .replaceAll("{{indent}}", "\t")}`
            );
            completionItem.additionalTextEdits = [
              vscode.TextEdit.delete(
                new vscode.Range(
                  position.line,
                  0,
                  position.line,
                  position.character
                )
              ),
            ];
            completionItems.push(completionItem);
          }

          return completionItems;
        }
        return undefined;
      },
    },
    "."
  );

  context.subscriptions.push(disposable);
}
export function deactivate() {}

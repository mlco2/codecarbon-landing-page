import { createHighlighter, type Highlighter } from "shiki";

let highlighter: Highlighter | null = null;

async function getHighlighter(): Promise<Highlighter> {
  if (!highlighter) {
    highlighter = await createHighlighter({
      themes: ["one-dark-pro"],
      langs: ["python", "bash", "shell"],
    });
  }
  return highlighter;
}

const languageMap: Record<string, string> = {
  python: "python",
  bash: "bash",
  shell: "bash",
};

export async function highlightCode(
  code: string,
  language: string,
): Promise<string> {
  const hl = await getHighlighter();
  const lang = languageMap[language] ?? "bash";

  return hl.codeToHtml(code, {
    lang,
    theme: "one-dark-pro",
    transformers: [
      {
        pre(node) {
          node.properties.class = "shiki-code";
        },
      },
    ],
  });
}

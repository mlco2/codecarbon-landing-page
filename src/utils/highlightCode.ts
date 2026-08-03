import { createHighlighter, type Highlighter } from "shiki";

declare global {
  var __mlco2ShikiHighlighter: Highlighter | undefined;
  var __mlco2ShikiHighlighterPromise: Promise<Highlighter> | undefined;
}

async function getHighlighter(): Promise<Highlighter> {
  if (globalThis.__mlco2ShikiHighlighter) {
    return globalThis.__mlco2ShikiHighlighter;
  }

  globalThis.__mlco2ShikiHighlighterPromise ??= createHighlighter({
    themes: ["one-dark-pro"],
    langs: ["python", "bash", "shell"],
  }).then((instance) => {
    globalThis.__mlco2ShikiHighlighter = instance;
    return instance;
  });

  return globalThis.__mlco2ShikiHighlighterPromise;
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

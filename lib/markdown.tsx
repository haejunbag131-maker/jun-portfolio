import React from "react";

const HIGHLIGHT_MAP: Record<number, string> = {
  1: "highlight-text-tertiary",
  2: "highlight-text-secondary",
  3: "highlight-text-primary",
};

function parseInline(text: string, keyPrefix = ""): React.ReactNode[] {
  const regex = /\*{3}(.+?)\*{3}|\*{2}(.+?)\*{2}|\*(.+?)\*/g;
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }

    const groupIndex =
      match[1] !== undefined ? 1 : match[2] !== undefined ? 2 : 3;

    parts.push(
      <span
        key={`${keyPrefix}-${match.index}`}
        className={HIGHLIGHT_MAP[groupIndex]}
      >
        {match[groupIndex]}
      </span>,
    );

    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts;
}

function parseLineBreaks(text: string): React.ReactNode {
  const lines = text.split("\n");

  return (
    <>
      {lines.map((line, index) => (
        <React.Fragment key={index}>
          {index > 0 && <br />}
          {parseInline(line, `line-${index}`)}
        </React.Fragment>
      ))}
    </>
  );
}

export function parseMarkdown(data: unknown): unknown {
  if (typeof data === "string") {
    const normalizedText = data.replace(/\r\n/g, "\n");

    if (
      !/\*{1,3}[^*]+\*{1,3}/.test(normalizedText) &&
      !normalizedText.includes("\n")
    ) {
      return normalizedText;
    }

    const paragraphs = normalizedText.split("\n\n");

    if (paragraphs.length === 1) {
      return parseLineBreaks(normalizedText);
    }

    return (
      <>
        {paragraphs.map((paragraph, index) => (
          <React.Fragment key={index}>
            {index > 0 && (
              <>
                <br />
                <br />
              </>
            )}
            {parseLineBreaks(paragraph)}
          </React.Fragment>
        ))}
      </>
    );
  }

  if (Array.isArray(data)) {
    return data.map(parseMarkdown);
  }

  if (typeof data === "object" && data !== null) {
    const result: Record<string, unknown> = {};

    for (const key in data) {
      result[key] = parseMarkdown((data as Record<string, unknown>)[key]);
    }

    return result;
  }

  return data;
}
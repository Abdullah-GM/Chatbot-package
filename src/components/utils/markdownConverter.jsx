import React from "react";
import MarkdownIt from "markdown-it";
import DOMPurify from "dompurify";

const md = new MarkdownIt();

/**
 * Render markdown text as HTML
 * @param {string} camText - Markdown text
 * @returns {JSX.Element} - Rendered HTML
 */
export function CamReport({ camText }) {
  const rawHtml = md.render(camText);
  const safeHtml = DOMPurify.sanitize(rawHtml);

  return <div dangerouslySetInnerHTML={{ __html: safeHtml }} />;
}

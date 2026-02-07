// src/utils/mathFormatter.js

/**
 * Normalize mathematical expressions for frontend rendering
 * (MathJax / KaTeX friendly)
 */
export function formatMath(text) {
  if (!text || typeof text !== "string") return text;

  let formatted = text;

  // Normalize common symbols
  formatted = formatted
    .replace(/×/g, "\\times ")
    .replace(/÷/g, "\\div ")
    .replace(/√/g, "\\sqrt ")
    .replace(/π/g, "\\pi ")
    .replace(/∞/g, "\\infty ");

  // Ensure inline math consistency
  formatted = formatted.replace(/\$(.*?)\$/g, "\\($1\\)");

  // Ensure block math consistency
  formatted = formatted.replace(/\$\$(.*?)\$\$/gs, "\\[$1\\]");

  // Fix spacing issues
  formatted = formatted.replace(/\s{2,}/g, " ");

  return formatted.trim();
}

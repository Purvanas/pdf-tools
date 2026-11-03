(function exposePageRange(root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.PdfPageRange = api;
}(typeof globalThis !== 'undefined' ? globalThis : this, function createPageRange() {
  'use strict';

  function parsePageRange(value, maximum) {
    const max = Number(maximum);
    if (!Number.isInteger(max) || max < 1) return null;

    const input = String(value || '').trim();
    if (!input) return null;

    const selected = new Set();
    const parts = input.split(',');
    for (const rawPart of parts) {
      const part = rawPart.trim();
      if (!part) return null;

      const single = part.match(/^(\d+)$/);
      if (single) {
        const page = Number(single[1]);
        if (page < 1 || page > max) return null;
        selected.add(page);
        continue;
      }

      const range = part.match(/^(\d+)\s*-\s*(\d+)$/);
      if (!range) return null;
      const start = Number(range[1]);
      const end = Number(range[2]);
      if (start < 1 || end > max || start > end) return null;
      for (let page = start; page <= end; page += 1) selected.add(page);
    }

    return [...selected].sort((a, b) => a - b);
  }

  return { parsePageRange };
}));

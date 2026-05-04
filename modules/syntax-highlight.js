const keywords = new Set([
  'await',
  'async',
  'break',
  'case',
  'catch',
  'class',
  'const',
  'continue',
  'debugger',
  'default',
  'delete',
  'do',
  'else',
  'export',
  'extends',
  'finally',
  'for',
  'from',
  'function',
  'get',
  'if',
  'import',
  'in',
  'instanceof',
  'let',
  'new',
  'of',
  'return',
  'set',
  'static',
  'super',
  'switch',
  'this',
  'throw',
  'try',
  'typeof',
  'var',
  'void',
  'while',
  'with',
  'yield',
]);

const constants = new Set(['false', 'Infinity', 'NaN', 'null', 'true', 'undefined']);

const builtins = new Set([
  'Array',
  'BigInt',
  'Boolean',
  'Date',
  'Error',
  'JSON',
  'Map',
  'Math',
  'Number',
  'Object',
  'Promise',
  'RegExp',
  'Set',
  'String',
  'Symbol',
  'WeakMap',
  'WeakSet',
  'console',
  'document',
  'fetch',
]);

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function wrapToken(className, value) {
  return `<span class="${className}">${escapeHtml(value)}</span>`;
}

function readQuotedString(code, start) {
  const quote = code[start];
  let index = start + 1;

  while (index < code.length) {
    const char = code[index];
    if (char === '\\') {
      index += 2;
      continue;
    }
    index += 1;
    if (char === quote) {
      break;
    }
  }

  return code.slice(start, index);
}

function readBlockComment(code, start) {
  const end = code.indexOf('*/', start + 2);
  return code.slice(start, end === -1 ? code.length : end + 2);
}

function readLineComment(code, start) {
  const end = code.indexOf('\n', start + 2);
  return code.slice(start, end === -1 ? code.length : end);
}

function readTemplateLiteral(code, start) {
  let index = start + 1;

  while (index < code.length) {
    const char = code[index];
    if (char === '\\') {
      index += 2;
      continue;
    }
    index += 1;
    if (char === '`') {
      break;
    }
  }

  return code.slice(start, index);
}

function readRegexLiteral(code, start) {
  let index = start + 1;
  let inCharacterClass = false;

  while (index < code.length) {
    const char = code[index];
    if (char === '\\') {
      index += 2;
      continue;
    }
    if (char === '[') {
      inCharacterClass = true;
    } else if (char === ']') {
      inCharacterClass = false;
    } else if (char === '/' && !inCharacterClass) {
      index += 1;
      while (/[a-z]/i.test(code[index] ?? '')) {
        index += 1;
      }
      break;
    }
    index += 1;
  }

  return code.slice(start, index);
}

function likelyStartsRegex(code, index) {
  let cursor = index - 1;
  while (cursor >= 0 && /\s/.test(code[cursor])) {
    cursor -= 1;
  }

  if (cursor < 0) {
    return true;
  }

  return /[({[=,:;!&|?+\-*~%^<>]/.test(code[cursor]);
}

function readNumber(code, start) {
  const match = code.slice(start).match(/^(?:0[xX][\da-fA-F_]+|0[bB][01_]+|0[oO][0-7_]+|\d[\d_]*(?:\.[\d_]*)?(?:e[+-]?[\d_]+)?n?)/);
  return match?.[0] ?? code[start];
}

function readIdentifier(code, start) {
  const match = code.slice(start).match(/^[A-Za-z_$][\w$]*/);
  return match?.[0] ?? code[start];
}

function tokenClassForIdentifier(code, start, word) {
  if (keywords.has(word)) {
    return 'token-keyword';
  }
  if (constants.has(word)) {
    return 'token-constant';
  }
  if (builtins.has(word)) {
    return 'token-builtin';
  }

  let cursor = start + word.length;
  while (cursor < code.length && /\s/.test(code[cursor])) {
    cursor += 1;
  }
  if (code[cursor] === '(') {
    return 'token-function';
  }

  return '';
}

export function highlightJavaScript(code) {
  let html = '';
  let index = 0;

  while (index < code.length) {
    const char = code[index];
    const next = code[index + 1];

    if (char === '/' && next === '/') {
      const token = readLineComment(code, index);
      html += wrapToken('token-comment', token);
      index += token.length;
      continue;
    }

    if (char === '/' && next === '*') {
      const token = readBlockComment(code, index);
      html += wrapToken('token-comment', token);
      index += token.length;
      continue;
    }

    if (char === '"' || char === "'") {
      const token = readQuotedString(code, index);
      html += wrapToken('token-string', token);
      index += token.length;
      continue;
    }

    if (char === '`') {
      const token = readTemplateLiteral(code, index);
      html += wrapToken('token-string', token);
      index += token.length;
      continue;
    }

    if (char === '/' && next !== '/' && next !== '*' && likelyStartsRegex(code, index)) {
      const token = readRegexLiteral(code, index);
      html += wrapToken('token-regexp', token);
      index += token.length;
      continue;
    }

    if (/\d/.test(char)) {
      const token = readNumber(code, index);
      html += wrapToken('token-number', token);
      index += token.length;
      continue;
    }

    if (/[A-Za-z_$]/.test(char)) {
      const token = readIdentifier(code, index);
      const className = tokenClassForIdentifier(code, index, token);
      html += className ? wrapToken(className, token) : escapeHtml(token);
      index += token.length;
      continue;
    }

    html += escapeHtml(char);
    index += 1;
  }

  return html;
}

export function renderHighlightedCode(element, code) {
  element.innerHTML = `<code>${highlightJavaScript(code)}</code>`;
}

export function getEditorCode(editor) {
  return editor.textContent.replaceAll('\u00a0', ' ');
}

function isSelectionInside(element) {
  const selection = window.getSelection();
  if (!selection || selection.rangeCount === 0) {
    return false;
  }

  return element.contains(selection.anchorNode) && element.contains(selection.focusNode);
}

function getSelectionOffsets(element) {
  const selection = window.getSelection();
  if (!selection || selection.rangeCount === 0 || !isSelectionInside(element)) {
    const length = getEditorCode(element).length;
    return { start: length, end: length };
  }

  const range = selection.getRangeAt(0);
  const leadingRange = range.cloneRange();
  leadingRange.selectNodeContents(element);
  leadingRange.setEnd(range.startContainer, range.startOffset);

  const trailingRange = range.cloneRange();
  trailingRange.selectNodeContents(element);
  trailingRange.setEnd(range.endContainer, range.endOffset);

  return {
    start: leadingRange.toString().length,
    end: trailingRange.toString().length,
  };
}

function findTextPosition(element, offset) {
  const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT);
  let node = walker.nextNode();
  let remaining = offset;

  while (node) {
    if (remaining <= node.textContent.length) {
      return { node, offset: remaining };
    }
    remaining -= node.textContent.length;
    node = walker.nextNode();
  }

  return null;
}

export function setEditorSelection(element, start, end = start) {
  const selection = window.getSelection();
  if (!selection) {
    return;
  }

  const range = document.createRange();
  const startPosition = findTextPosition(element, start);
  const endPosition = findTextPosition(element, end);

  if (startPosition && endPosition) {
    range.setStart(startPosition.node, startPosition.offset);
    range.setEnd(endPosition.node, endPosition.offset);
  } else {
    range.selectNodeContents(element);
    range.collapse(false);
  }

  selection.removeAllRanges();
  selection.addRange(range);
}

function renderEditorHtml(editor, code) {
  editor.innerHTML = code ? highlightJavaScript(code) : '<br>';
  if (code.endsWith('\n')) {
    editor.appendChild(document.createElement('br'));
  }
}

export function setEditorCode(editor, code, options = {}) {
  const { preserveSelection = false, selection: nextSelection = null } = options;
  const selection = preserveSelection && isSelectionInside(editor) ? getSelectionOffsets(editor) : null;

  renderEditorHtml(editor, code);

  if (nextSelection) {
    setEditorSelection(editor, nextSelection.start, nextSelection.end);
    return;
  }

  if (selection) {
    setEditorSelection(editor, selection.start, selection.end);
  }
}

export function refreshHighlightedEditor(editor) {
  setEditorCode(editor, getEditorCode(editor), { preserveSelection: true });
}

function insertPlainText(text) {
  const selection = window.getSelection();
  if (!selection || selection.rangeCount === 0) {
    return;
  }

  const range = selection.getRangeAt(0);
  range.deleteContents();
  range.insertNode(document.createTextNode(text));
  range.collapse(false);
  selection.removeAllRanges();
  selection.addRange(range);
}

function notifyEditorInput(editor, inputType) {
  editor.dispatchEvent(new InputEvent('input', { bubbles: true, inputType }));
}

export function setupHighlightedEditor(editor) {
  editor.addEventListener('compositionstart', () => {
    editor.dataset.composing = 'true';
  });

  editor.addEventListener('compositionend', () => {
    delete editor.dataset.composing;
    refreshHighlightedEditor(editor);
  });

  editor.addEventListener('beforeinput', (event) => {
    if (event.inputType !== 'insertParagraph' && event.inputType !== 'insertLineBreak') {
      return;
    }

    event.preventDefault();
    insertPlainText('\n');
    refreshHighlightedEditor(editor);
    notifyEditorInput(editor, event.inputType);
  });

  editor.addEventListener('paste', (event) => {
    event.preventDefault();
    insertPlainText(event.clipboardData.getData('text/plain'));
    refreshHighlightedEditor(editor);
    notifyEditorInput(editor, 'insertFromPaste');
  });

  editor.addEventListener('input', () => {
    if (editor.dataset.composing === 'true') {
      return;
    }

    refreshHighlightedEditor(editor);
  });
}

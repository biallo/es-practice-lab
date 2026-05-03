function updateEditorValue(editor, value, selectionStart, selectionEnd, saveDraft) {
  editor.value = value;
  editor.selectionStart = selectionStart;
  editor.selectionEnd = selectionEnd;
  saveDraft();
}

export function indentCodeSelection(event, saveDraft) {
  if (event.key !== 'Tab') {
    return;
  }

  event.preventDefault();

  const editor = event.currentTarget;
  const indent = '  ';
  const value = editor.value;
  const start = editor.selectionStart;
  const end = editor.selectionEnd;
  const selectedText = value.slice(start, end);

  if (!selectedText.includes('\n')) {
    if (event.shiftKey) {
      const beforeCursor = value.slice(Math.max(0, start - indent.length), start);
      if (beforeCursor === indent) {
        updateEditorValue(
          editor,
          value.slice(0, start - indent.length) + value.slice(start),
          start - indent.length,
          end - indent.length,
          saveDraft
        );
      }
      return;
    }

    updateEditorValue(
      editor,
      value.slice(0, start) + indent + value.slice(end),
      start + indent.length,
      start + indent.length,
      saveDraft
    );
    return;
  }

  const lineStart = value.lastIndexOf('\n', start - 1) + 1;
  const selection = value.slice(lineStart, end);

  if (event.shiftKey) {
    let removedFromFirstLine = 0;
    const outdentedSelection = selection.replace(/^( {1,2})/gm, (_matchedSpaces, spaces, offset) => {
      const removed = spaces.length;
      if (offset === 0) {
        removedFromFirstLine = removed;
      }
      return '';
    });
    const removedTotal = selection.length - outdentedSelection.length;

    updateEditorValue(
      editor,
      value.slice(0, lineStart) + outdentedSelection + value.slice(end),
      Math.max(lineStart, start - removedFromFirstLine),
      end - removedTotal,
      saveDraft
    );
    return;
  }

  const indentedSelection = selection.replace(/^/gm, indent);
  const lineCount = selection.split('\n').length;

  updateEditorValue(
    editor,
    value.slice(0, lineStart) + indentedSelection + value.slice(end),
    start + indent.length,
    end + indent.length * lineCount,
    saveDraft
  );
}

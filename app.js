import { lessons } from './lessons.js';

const stateKey = 'es-practice-state-v1';
const selectedLessonKey = 'es-practice-selected-lesson';

const lessonListEl = document.getElementById('lessonList');
const mobileLessonSelectEl = document.getElementById('mobileLessonSelect');
const mainContentEl = document.querySelector('.main-content');
const progressTextEl = document.getElementById('progressText');
const lessonTitleEl = document.getElementById('lessonTitle');
const lessonExerciseEl = document.getElementById('lessonExercise');
const lessonExplanationEl = document.getElementById('lessonExplanation');
const codeEditorEl = document.getElementById('codeEditor');
const outputAreaEl = document.getElementById('outputArea');
const errorCodeEl = document.getElementById('errorCode');
const correctCodeEl = document.getElementById('correctCode');
const markCompletedBtn = document.getElementById('markCompletedBtn');
const runCodeBtn = document.getElementById('runCodeBtn');

let completedLessons = [];
let drafts = {};
let selectedLessonId = lessons[0].id;

function loadState() {
  const stored = localStorage.getItem(stateKey);
  if (stored) {
    try {
      const parsed = JSON.parse(stored);
      completedLessons = parsed.completed || [];
      drafts = parsed.drafts || {};
    } catch (e) {
      completedLessons = [];
      drafts = {};
    }
  }
  const savedSelected = localStorage.getItem(selectedLessonKey);
  if (savedSelected) {
    selectedLessonId = savedSelected;
  }
}

function saveState() {
  localStorage.setItem(stateKey, JSON.stringify({ completed: completedLessons, drafts }));
}

function saveSelectedLesson() {
  localStorage.setItem(selectedLessonKey, selectedLessonId);
}

function scrollLessonContentToTop() {
  if (window.matchMedia('(max-width: 980px)').matches) {
    mainContentEl.scrollIntoView({ block: 'start', behavior: 'smooth' });
    return;
  }
  mainContentEl.scrollTo({ top: 0, behavior: 'smooth' });
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderLessonList() {
  lessonListEl.innerHTML = '';
  mobileLessonSelectEl.innerHTML = '';
  lessons.forEach((lesson) => {
    const isCompleted = completedLessons.includes(lesson.id);
    const option = document.createElement('option');
    option.value = lesson.id;
    option.textContent = `${lesson.id}. ${lesson.title} (${lesson.version})${isCompleted ? ' - 已完成' : ''}`;
    option.selected = lesson.id === selectedLessonId;
    mobileLessonSelectEl.appendChild(option);

    const item = document.createElement('div');
    item.className = 'lesson-item';
    if (lesson.id === selectedLessonId) {
      item.classList.add('active');
    }
    if (isCompleted) {
      item.classList.add('completed');
    }
    item.innerHTML = `
      <div class="lesson-label">
        <div class="lesson-title">${lesson.id}. ${lesson.title}</div>
        <div class="lesson-details">
          <div class="lesson-meta">${lesson.version}</div>
          <div class="lesson-status">${isCompleted ? '已完成' : '未完成'}</div>
        </div>
      </div>`;
    item.addEventListener('click', () => {
      selectedLessonId = lesson.id;
      saveSelectedLesson();
      render();
      scrollLessonContentToTop();
    });
    lessonListEl.appendChild(item);
  });
}

function updateProgress() {
  const total = lessons.length;
  const done = completedLessons.length;
  progressTextEl.textContent = `${done} / ${total} 已完成`;
}

function renderLesson() {
  const lesson = lessons.find((item) => item.id === selectedLessonId) || lessons[0];
  lessonTitleEl.textContent = `${lesson.id}. ${lesson.title} (${lesson.version})`;
  lessonExerciseEl.textContent = lesson.exercise;
  lessonExplanationEl.textContent = lesson.explanation;
  errorCodeEl.textContent = lesson.errorCode;
  correctCodeEl.textContent = lesson.correctCode;
  codeEditorEl.value = drafts[lesson.id] || lesson.starterCode;
  outputAreaEl.textContent = '运行后结果会显示在这里';
  markCompletedBtn.textContent = completedLessons.includes(lesson.id) ? '已完成' : '标记完成';
  markCompletedBtn.disabled = completedLessons.includes(lesson.id);
}

function render() {
  renderLessonList();
  updateProgress();
  renderLesson();
}

function saveCurrentDraft() {
  drafts[selectedLessonId] = codeEditorEl.value;
  saveState();
}

function updateCodeEditorValue(value, selectionStart, selectionEnd) {
  codeEditorEl.value = value;
  codeEditorEl.selectionStart = selectionStart;
  codeEditorEl.selectionEnd = selectionEnd;
  saveCurrentDraft();
}

function indentCodeSelection(event) {
  if (event.key !== 'Tab') {
    return;
  }

  event.preventDefault();

  const indent = '  ';
  const value = codeEditorEl.value;
  const start = codeEditorEl.selectionStart;
  const end = codeEditorEl.selectionEnd;
  const selectedText = value.slice(start, end);

  if (!selectedText.includes('\n')) {
    if (event.shiftKey) {
      const beforeCursor = value.slice(Math.max(0, start - indent.length), start);
      if (beforeCursor === indent) {
        updateCodeEditorValue(
          value.slice(0, start - indent.length) + value.slice(start),
          start - indent.length,
          end - indent.length
        );
      }
      return;
    }

    updateCodeEditorValue(
      value.slice(0, start) + indent + value.slice(end),
      start + indent.length,
      start + indent.length
    );
    return;
  }

  const lineStart = value.lastIndexOf('\n', start - 1) + 1;
  const selection = value.slice(lineStart, end);

  if (event.shiftKey) {
    let removedFromFirstLine = 0;
    const outdentedSelection = selection.replace(/^( {1,2})/gm, (matchedSpaces, spaces, offset) => {
      const removed = spaces.length;
      if (offset === 0) {
        removedFromFirstLine = removed;
      }
      return '';
    });
    const removedTotal = selection.length - outdentedSelection.length;

    updateCodeEditorValue(
      value.slice(0, lineStart) + outdentedSelection + value.slice(end),
      Math.max(lineStart, start - removedFromFirstLine),
      end - removedTotal
    );
    return;
  }

  const indentedSelection = selection.replace(/^/gm, indent);
  const lineCount = selection.split('\n').length;

  updateCodeEditorValue(
    value.slice(0, lineStart) + indentedSelection + value.slice(end),
    start + indent.length,
    end + indent.length * lineCount
  );
}

runCodeBtn.addEventListener('click', () => {
  const code = codeEditorEl.value;
  const lesson = lessons.find((item) => item.id === selectedLessonId);
  drafts[selectedLessonId] = code;
  saveState();
  try {
    // 创建沙盒iframe来执行代码
    const sandbox = document.createElement('iframe');
    sandbox.style.display = 'none';
    document.body.appendChild(sandbox);
    
    const sandboxWindow = sandbox.contentWindow;
    const sandboxDocument = sandbox.contentDocument;
    
    // 重写console.log来捕获输出
    let output = '';
    sandboxWindow.console.log = (...args) => {
      output += args.map(arg => String(arg)).join(' ') + '\n';
    };
    
    // 执行代码
    sandboxWindow.eval(code);
    
    outputAreaEl.textContent = output || '代码执行完成（无输出）';
    
    // 清理沙盒
    document.body.removeChild(sandbox);
  } catch (error) {
    outputAreaEl.textContent = `错误：${error.message}`;
  }
});

codeEditorEl.addEventListener('input', (event) => {
  drafts[selectedLessonId] = event.target.value;
  saveState();
});
codeEditorEl.addEventListener('keydown', indentCodeSelection);

markCompletedBtn.addEventListener('click', () => {
  if (!completedLessons.includes(selectedLessonId)) {
    completedLessons.push(selectedLessonId);
    saveState();
    render();
  }
});

mobileLessonSelectEl.addEventListener('change', (event) => {
  selectedLessonId = event.target.value;
  saveSelectedLesson();
  render();
  scrollLessonContentToTop();
});

loadState();
render();

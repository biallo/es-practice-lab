import { lessons } from './lessons.js';

const stateKey = 'es-practice-state-v1';
const selectedLessonKey = 'es-practice-selected-lesson';
const tabKey = 'es-practice-active-tab';

const tabs = ['explain', 'practice', 'debug', 'review'];

const lessonListEl = document.getElementById('lessonList');
const mobileLessonSelectEl = document.getElementById('mobileLessonSelect');
const mainContentEl = document.querySelector('.main-content');
const progressTextEl = document.getElementById('progressText');
const lessonTitleEl = document.getElementById('lessonTitle');
const lessonExplanationEl = document.getElementById('lessonExplanation');
const explainCodeEl = document.getElementById('explainCode');
const practicePromptEl = document.getElementById('practicePrompt');
const practiceEditorEl = document.getElementById('practiceEditor');
const practiceOutputEl = document.getElementById('practiceOutput');
const practiceResultEl = document.getElementById('practiceResult');
const answerPanelEl = document.getElementById('answerPanel');
const answerCodeEl = document.getElementById('answerCode');
const answerExplanationEl = document.getElementById('answerExplanation');
const debugEditorEl = document.getElementById('debugEditor');
const debugOutputEl = document.getElementById('debugOutput');
const debugResultEl = document.getElementById('debugResult');
const fixPanelEl = document.getElementById('fixPanel');
const fixCodeEl = document.getElementById('fixCode');
const fixExplanationEl = document.getElementById('fixExplanation');
const reviewChecklistEl = document.getElementById('reviewChecklist');
const markCompletedBtn = document.getElementById('markCompletedBtn');
const runPracticeBtn = document.getElementById('runPracticeBtn');
const checkPracticeBtn = document.getElementById('checkPracticeBtn');
const toggleAnswerBtn = document.getElementById('toggleAnswerBtn');
const resetPracticeBtn = document.getElementById('resetPracticeBtn');
const runDebugBtn = document.getElementById('runDebugBtn');
const checkDebugBtn = document.getElementById('checkDebugBtn');
const resetDebugBtn = document.getElementById('resetDebugBtn');
const toggleFixBtn = document.getElementById('toggleFixBtn');
const tabButtons = Array.from(document.querySelectorAll('.study-tab'));
const tabPanels = Array.from(document.querySelectorAll('.tab-panel'));

let completedLessons = [];
let practiceDrafts = {};
let debugDrafts = {};
let selectedLessonId = lessons[0].id;
let activeTab = 'explain';
let showAnswer = false;
let showFix = false;

function loadState() {
  const stored = localStorage.getItem(stateKey);
  if (stored) {
    try {
      const parsed = JSON.parse(stored);
      completedLessons = Array.isArray(parsed.completed) ? parsed.completed : [];
      practiceDrafts = parsed.practiceDraftsByLessonV2 || {};
      debugDrafts = parsed.debugDraftsByLessonV2 || {};
    } catch (e) {
      completedLessons = [];
      practiceDrafts = {};
      debugDrafts = {};
    }
  }

  const savedSelected = localStorage.getItem(selectedLessonKey);
  if (lessons.some((lesson) => lesson.id === savedSelected)) {
    selectedLessonId = savedSelected;
  }

  const savedTab = localStorage.getItem(tabKey);
  if (tabs.includes(savedTab)) {
    activeTab = savedTab;
  }
}

function saveState() {
  localStorage.setItem(
    stateKey,
    JSON.stringify({
      completed: completedLessons,
      practiceDraftsByLessonV2: practiceDrafts,
      debugDraftsByLessonV2: debugDrafts,
    })
  );
}

function saveSelectedLesson() {
  localStorage.setItem(selectedLessonKey, selectedLessonId);
}

function saveActiveTab() {
  localStorage.setItem(tabKey, activeTab);
}

function getSelectedLesson() {
  return lessons.find((item) => item.id === selectedLessonId) || lessons[0];
}

function getPracticeDraft(lesson) {
  return practiceDrafts[lesson.id] ?? getPractice(lesson).starter;
}

function getDebugDraft(lesson) {
  return debugDrafts[lesson.id] ?? getDebugCase(lesson).broken;
}

function getPractice(lesson) {
  return {
    prompt: lesson.practice?.prompt ?? lesson.exercise,
    starter: lesson.practice?.starter ?? createPracticeStarter(lesson),
    answer: lesson.practice?.answer ?? lesson.correctCode,
    explanation: lesson.practice?.explanation ?? lesson.explanation,
  };
}

function createPracticeStarter(lesson) {
  return `// 练习：${lesson.exercise}\n// 请在下面写出你的实现，再运行或对照参考答案。\n`;
}

function getDebugCase(lesson) {
  return {
    title: lesson.debugCase?.title ?? '改错练习',
    broken: lesson.debugCase?.broken ?? lesson.starterCode,
    fixed: lesson.debugCase?.fixed ?? lesson.correctCode,
    reason: lesson.debugCase?.reason ?? lesson.explanation,
  };
}

function getReviewItems(lesson) {
  return lesson.review ?? [
    `能说出 ${lesson.title} 解决的问题。`,
    '独立完成练习题，并能解释自己的写法。',
    '能指出错误代码的问题，并写出修正版本。',
    '理解参考答案中的关键语法和适用场景。',
  ];
}

function getExplanationItems(lesson) {
  if (Array.isArray(lesson.explanation)) {
    return lesson.explanation;
  }

  if (Array.isArray(lesson.concept)) {
    return lesson.concept;
  }

  return [lesson.explanation];
}

function renderExplanation(lesson) {
  const items = getExplanationItems(lesson);
  renderTextBlock(lessonExplanationEl, items);
}

function renderTextBlock(element, content) {
  const items = Array.isArray(content) ? content : [content];
  element.innerHTML = `<ul class="concept-list">${items.map((item) => `<li>${item}</li>`).join('')}</ul>`;
}

function scrollLessonContentToTop() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const options = { block: 'start', behavior: prefersReducedMotion ? 'auto' : 'smooth' };

  if (window.matchMedia('(max-width: 980px)').matches) {
    mainContentEl.scrollIntoView(options);
    return;
  }

  mainContentEl.scrollTo({ top: 0, behavior: options.behavior });
  window.scrollTo({ top: 0, behavior: options.behavior });
}

function switchTab(tab) {
  activeTab = tab;
  saveActiveTab();
  renderTabs();
}

function renderTabs() {
  tabButtons.forEach((button) => {
    const isActive = button.dataset.tab === activeTab;
    button.classList.toggle('active', isActive);
    button.setAttribute('aria-selected', String(isActive));
  });

  tabPanels.forEach((panel) => {
    panel.classList.toggle('active', panel.dataset.panel === activeTab);
  });
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
      activeTab = 'explain';
      showAnswer = false;
      showFix = false;
      saveSelectedLesson();
      saveActiveTab();
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

function renderReviewChecklist(lesson) {
  const items = getReviewItems(lesson);
  reviewChecklistEl.innerHTML = items.map((item) => `<li>${item}</li>`).join('');
}

function renderLesson() {
  const lesson = getSelectedLesson();
  const practice = getPractice(lesson);
  const debugCase = getDebugCase(lesson);
  const completed = completedLessons.includes(lesson.id);
  lessonTitleEl.textContent = `${lesson.id}. ${lesson.title} (${lesson.version})`;
  renderExplanation(lesson);
  explainCodeEl.textContent = lesson.exampleCode ?? lesson.correctCode;

  practicePromptEl.textContent = practice.prompt;
  practiceEditorEl.value = getPracticeDraft(lesson);
  practiceOutputEl.textContent = '运行后结果会显示在这里';
  practiceResultEl.textContent = '';
  answerCodeEl.textContent = practice.answer;
  renderTextBlock(answerExplanationEl, practice.explanation);
  answerPanelEl.hidden = !showAnswer;
  toggleAnswerBtn.textContent = showAnswer ? '隐藏答案' : '查看答案';

  debugEditorEl.value = getDebugDraft(lesson);
  debugOutputEl.textContent = '运行后结果会显示在这里';
  debugResultEl.textContent = '';
  fixCodeEl.textContent = debugCase.fixed;
  renderTextBlock(fixExplanationEl, debugCase.reason);
  fixPanelEl.hidden = !showFix;
  toggleFixBtn.textContent = showFix ? '隐藏修正' : '显示修正';

  renderReviewChecklist(lesson);
  markCompletedBtn.textContent = completed ? '已完成' : '标记完成';
  markCompletedBtn.disabled = completed;
  markCompletedBtn.classList.toggle('completed', completed);
}

function render() {
  renderLessonList();
  updateProgress();
  renderTabs();
  renderLesson();
}

function normalizeCode(code) {
  return code.replace(/\s+/g, '');
}

function savePracticeDraft() {
  practiceDrafts[selectedLessonId] = practiceEditorEl.value;
  saveState();
}

function saveDebugDraft() {
  debugDrafts[selectedLessonId] = debugEditorEl.value;
  saveState();
}

function updateEditorValue(editor, value, selectionStart, selectionEnd, saveDraft) {
  editor.value = value;
  editor.selectionStart = selectionStart;
  editor.selectionEnd = selectionEnd;
  saveDraft();
}

function indentCodeSelection(event, saveDraft) {
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
    const outdentedSelection = selection.replace(/^( {1,2})/gm, (matchedSpaces, spaces, offset) => {
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

function runCode(code, outputEl) {
  try {
    const sandbox = document.createElement('iframe');
    sandbox.style.display = 'none';
    document.body.appendChild(sandbox);

    const sandboxWindow = sandbox.contentWindow;
    let output = '';
    sandboxWindow.console.log = (...args) => {
      output += args.map((arg) => String(arg)).join(' ') + '\n';
    };

    sandboxWindow.eval(code);
    outputEl.textContent = output || '代码执行完成（无输出）';
    document.body.removeChild(sandbox);
  } catch (error) {
    outputEl.textContent = `错误：${error.message}`;
  }
}

function checkPractice() {
  const lesson = getSelectedLesson();
  const matched = normalizeCode(practiceEditorEl.value) === normalizeCode(getPractice(lesson).answer);
  practiceResultEl.textContent = matched
    ? '看起来和参考答案一致。'
    : '还不完全一样。可以先运行看看结果，再决定是否查看答案。';
}

function checkDebug() {
  const lesson = getSelectedLesson();
  const matched = normalizeCode(debugEditorEl.value) === normalizeCode(getDebugCase(lesson).fixed);
  debugResultEl.textContent = matched
    ? '修正结果和参考版本一致。'
    : '还没完全修好。重点对照本课知识点和修正版本。';
}

tabButtons.forEach((button) => {
  button.addEventListener('click', () => switchTab(button.dataset.tab));
});

runPracticeBtn.addEventListener('click', () => {
  savePracticeDraft();
  runCode(practiceEditorEl.value, practiceOutputEl);
});

checkPracticeBtn.addEventListener('click', checkPractice);

toggleAnswerBtn.addEventListener('click', () => {
  showAnswer = !showAnswer;
  renderLesson();
});

resetPracticeBtn.addEventListener('click', () => {
  const lesson = getSelectedLesson();
  const practice = getPractice(lesson);
  practiceEditorEl.value = practice.starter;
  practiceResultEl.textContent = '';
  practiceDrafts[lesson.id] = practice.starter;
  saveState();
});

runDebugBtn.addEventListener('click', () => {
  saveDebugDraft();
  runCode(debugEditorEl.value, debugOutputEl);
});

checkDebugBtn.addEventListener('click', checkDebug);

resetDebugBtn.addEventListener('click', () => {
  const lesson = getSelectedLesson();
  const debugCase = getDebugCase(lesson);
  debugEditorEl.value = debugCase.broken;
  debugResultEl.textContent = '';
  debugDrafts[lesson.id] = debugCase.broken;
  saveState();
});

toggleFixBtn.addEventListener('click', () => {
  showFix = !showFix;
  renderLesson();
});

practiceEditorEl.addEventListener('input', () => {
  savePracticeDraft();
  practiceResultEl.textContent = '';
});
practiceEditorEl.addEventListener('keydown', (event) => indentCodeSelection(event, savePracticeDraft));

debugEditorEl.addEventListener('input', () => {
  saveDebugDraft();
  debugResultEl.textContent = '';
});
debugEditorEl.addEventListener('keydown', (event) => indentCodeSelection(event, saveDebugDraft));

markCompletedBtn.addEventListener('click', () => {
  if (!completedLessons.includes(selectedLessonId)) {
    completedLessons.push(selectedLessonId);
    saveState();
    render();
  }
});

mobileLessonSelectEl.addEventListener('change', (event) => {
  selectedLessonId = event.target.value;
  activeTab = 'explain';
  showAnswer = false;
  showFix = false;
  saveSelectedLesson();
  saveActiveTab();
  render();
  scrollLessonContentToTop();
});

loadState();
render();

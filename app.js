import { lessons } from './lessons.js';
import { tabs } from './modules/config.js';
import { elements } from './modules/dom.js';
import { indentCodeSelection } from './modules/editor.js';
import { getDebugCase, getPractice, getSelectedLesson } from './modules/lesson-content.js';
import { render, renderTabs } from './modules/render.js';
import { runCode } from './modules/runner.js';
import { loadStoredState, saveActiveTab, saveSelectedLesson, saveStudyState } from './modules/storage.js';
import { getEditorCode, setEditorCode, setupHighlightedEditor } from './modules/syntax-highlight.js';
import { scrollLessonContentToTop } from './modules/ui.js';

const state = loadStoredState(lessons, tabs);

function renderApp() {
  render({
    lessons,
    state,
    elements,
    onLessonSelect: selectLesson,
  });
}

function selectLesson(lessonId) {
  state.selectedLessonId = lessonId;
  state.activeTab = 'explain';
  state.showAnswer = false;
  state.showFix = false;
  saveSelectedLesson(state);
  saveActiveTab(state);
  renderApp();
  scrollLessonContentToTop(elements.mainContent);
}

function savePracticeDraft() {
  state.practiceDrafts[state.selectedLessonId] = getEditorCode(elements.practiceEditor);
  saveStudyState(state);
}

function saveDebugDraft() {
  state.debugDrafts[state.selectedLessonId] = getEditorCode(elements.debugEditor);
  saveStudyState(state);
}

function switchTab(tab) {
  state.activeTab = tab;
  saveActiveTab(state);
  renderTabs(state, elements);
}

elements.tabButtons.forEach((button) => {
  button.addEventListener('click', () => switchTab(button.dataset.tab));
});

elements.runPracticeBtn.addEventListener('click', () => {
  savePracticeDraft();
  runCode(getEditorCode(elements.practiceEditor), elements.practiceOutput);
});

elements.toggleAnswerBtn.addEventListener('click', () => {
  state.showAnswer = !state.showAnswer;
  renderApp();
});

elements.resetPracticeBtn.addEventListener('click', () => {
  const lesson = getSelectedLesson(lessons, state.selectedLessonId);
  const practice = getPractice(lesson);
  setEditorCode(elements.practiceEditor, practice.starter);
  state.practiceDrafts[lesson.id] = practice.starter;
  saveStudyState(state);
});

elements.runDebugBtn.addEventListener('click', () => {
  saveDebugDraft();
  runCode(getEditorCode(elements.debugEditor), elements.debugOutput);
});

elements.resetDebugBtn.addEventListener('click', () => {
  const lesson = getSelectedLesson(lessons, state.selectedLessonId);
  const debugCase = getDebugCase(lesson);
  setEditorCode(elements.debugEditor, debugCase.broken);
  state.debugDrafts[lesson.id] = debugCase.broken;
  saveStudyState(state);
});

elements.toggleFixBtn.addEventListener('click', () => {
  state.showFix = !state.showFix;
  renderApp();
});

elements.practiceEditor.addEventListener('input', savePracticeDraft);
elements.practiceEditor.addEventListener('keydown', (event) => {
  indentCodeSelection(event, savePracticeDraft);
});

elements.debugEditor.addEventListener('input', saveDebugDraft);
elements.debugEditor.addEventListener('keydown', (event) => {
  indentCodeSelection(event, saveDebugDraft);
});

elements.markCompletedBtn.addEventListener('click', () => {
  if (!state.completedLessons.includes(state.selectedLessonId)) {
    state.completedLessons.push(state.selectedLessonId);
    saveStudyState(state);
    renderApp();
  }
});

elements.mobileLessonSelect.addEventListener('change', (event) => {
  selectLesson(event.target.value);
});

setupHighlightedEditor(elements.practiceEditor);
setupHighlightedEditor(elements.debugEditor);
renderApp();

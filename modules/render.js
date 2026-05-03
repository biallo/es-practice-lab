import {
  getDebugCase,
  getDebugDraft,
  getExplanationItems,
  getPractice,
  getPracticeDraft,
  getReviewItems,
  getSelectedLesson,
} from './lesson-content.js';
import { scrollActiveLessonIntoListView } from './ui.js';

export function render({ lessons, state, elements, onLessonSelect }) {
  renderLessonList(lessons, state, elements, onLessonSelect);
  updateProgress(lessons, state, elements);
  renderTabs(state, elements);
  renderLesson(lessons, state, elements);
}

function renderTextBlock(element, content) {
  const items = Array.isArray(content) ? content : [content];
  element.innerHTML = `<ul class="concept-list">${items.map((item) => `<li>${item}</li>`).join('')}</ul>`;
}

function renderExplanation(lesson, elements) {
  const items = getExplanationItems(lesson);
  renderTextBlock(elements.lessonExplanation, items);
}

function renderLessonList(lessons, state, elements, onLessonSelect) {
  elements.lessonList.innerHTML = '';
  elements.mobileLessonSelect.innerHTML = '';
  let activeLessonItem = null;

  lessons.forEach((lesson) => {
    const isCompleted = state.completedLessons.includes(lesson.id);
    const option = document.createElement('option');
    option.value = lesson.id;
    option.textContent = `${lesson.id}. ${lesson.title} (${lesson.version})${isCompleted ? ' - 已完成' : ''}`;
    option.selected = lesson.id === state.selectedLessonId;
    elements.mobileLessonSelect.appendChild(option);

    const item = document.createElement('div');
    item.className = 'lesson-item';
    if (lesson.id === state.selectedLessonId) {
      item.classList.add('active');
      activeLessonItem = item;
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
    item.addEventListener('click', () => onLessonSelect(lesson.id));
    elements.lessonList.appendChild(item);
  });

  scrollActiveLessonIntoListView(activeLessonItem, elements.lessonList);
}

function updateProgress(lessons, state, elements) {
  const total = lessons.length;
  const done = state.completedLessons.length;
  elements.progressText.textContent = `${done} / ${total} 已完成`;
}

export function renderTabs(state, elements) {
  elements.tabButtons.forEach((button) => {
    const isActive = button.dataset.tab === state.activeTab;
    button.classList.toggle('active', isActive);
    button.setAttribute('aria-selected', String(isActive));
  });

  elements.tabPanels.forEach((panel) => {
    panel.classList.toggle('active', panel.dataset.panel === state.activeTab);
  });
}

function renderReviewChecklist(lesson, elements) {
  const items = getReviewItems(lesson);
  elements.reviewChecklist.innerHTML = items.map((item) => `<li>${item}</li>`).join('');
}

function renderLesson(lessons, state, elements) {
  const lesson = getSelectedLesson(lessons, state.selectedLessonId);
  const practice = getPractice(lesson);
  const debugCase = getDebugCase(lesson);
  const completed = state.completedLessons.includes(lesson.id);

  elements.lessonTitle.textContent = `${lesson.id}. ${lesson.title} (${lesson.version})`;
  renderExplanation(lesson, elements);
  elements.explainCode.textContent = lesson.exampleCode ?? lesson.correctCode;

  elements.practicePrompt.textContent = practice.prompt;
  elements.practiceEditor.value = getPracticeDraft(lesson, state);
  elements.practiceOutput.textContent = '运行后结果会显示在这里';
  elements.answerCode.textContent = practice.answer;
  renderTextBlock(elements.answerExplanation, practice.explanation);
  elements.answerPanel.hidden = !state.showAnswer;
  elements.toggleAnswerBtn.textContent = state.showAnswer ? '隐藏答案' : '查看答案';

  elements.debugEditor.value = getDebugDraft(lesson, state);
  elements.debugOutput.textContent = '运行后结果会显示在这里';
  elements.fixCode.textContent = debugCase.fixed;
  renderTextBlock(elements.fixExplanation, debugCase.reason);
  elements.fixPanel.hidden = !state.showFix;
  elements.toggleFixBtn.textContent = state.showFix ? '隐藏修正' : '显示修正';

  renderReviewChecklist(lesson, elements);
  elements.markCompletedBtn.textContent = completed ? '已完成' : '标记完成';
  elements.markCompletedBtn.disabled = completed;
  elements.markCompletedBtn.classList.toggle('completed', completed);
}

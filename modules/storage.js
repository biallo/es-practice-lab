import { storageKeys } from './config.js';

export function loadStoredState(lessons, tabs) {
  const state = {
    completedLessons: [],
    practiceDrafts: {},
    debugDrafts: {},
    selectedLessonId: lessons[0].id,
    activeTab: 'explain',
    showAnswer: false,
    showFix: false,
  };

  const stored = localStorage.getItem(storageKeys.studyState);
  if (stored) {
    try {
      const parsed = JSON.parse(stored);
      state.completedLessons = Array.isArray(parsed.completed) ? parsed.completed : [];
      state.practiceDrafts = parsed.practiceDraftsByLessonV2 || {};
      state.debugDrafts = parsed.debugDraftsByLessonV2 || {};
    } catch {
      state.completedLessons = [];
      state.practiceDrafts = {};
      state.debugDrafts = {};
    }
  }

  const savedSelected = localStorage.getItem(storageKeys.selectedLesson);
  if (lessons.some((lesson) => lesson.id === savedSelected)) {
    state.selectedLessonId = savedSelected;
  }

  const savedTab = localStorage.getItem(storageKeys.activeTab);
  if (tabs.includes(savedTab)) {
    state.activeTab = savedTab;
  }

  return state;
}

export function saveStudyState(state) {
  localStorage.setItem(
    storageKeys.studyState,
    JSON.stringify({
      completed: state.completedLessons,
      practiceDraftsByLessonV2: state.practiceDrafts,
      debugDraftsByLessonV2: state.debugDrafts,
    })
  );
}

export function saveSelectedLesson(state) {
  localStorage.setItem(storageKeys.selectedLesson, state.selectedLessonId);
}

export function saveActiveTab(state) {
  localStorage.setItem(storageKeys.activeTab, state.activeTab);
}

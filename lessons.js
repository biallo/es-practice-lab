import { lessonCatalog } from './lesson-data/index.js';

function normalizeComparableCode(code) {
  return String(code ?? '').replace(/\s+/g, '');
}

function validateLesson(lesson) {
  const requiredFields = [
    ['version', lesson.version],
    ['title', lesson.title],
    ['exercise', lesson.exercise],
    ['starterCode', lesson.starterCode],
    ['correctCode', lesson.correctCode],
    ['practice.prompt', lesson.practice?.prompt],
    ['practice.starter', lesson.practice?.starter],
    ['practice.answer', lesson.practice?.answer],
    ['debugCase.title', lesson.debugCase?.title],
    ['debugCase.broken', lesson.debugCase?.broken],
    ['debugCase.fixed', lesson.debugCase?.fixed],
  ];

  requiredFields.forEach(([field, value]) => {
    if (typeof value !== 'string' || value.trim() === '') {
      throw new Error(`${lesson.title} 缺少必要字段：${field}`);
    }
  });

  if (!Array.isArray(lesson.explanation) || lesson.explanation.length < 2) {
    throw new Error(`${lesson.title} 的核心讲解至少需要两条说明。`);
  }

  if (!Array.isArray(lesson.practice.explanation) || lesson.practice.explanation.length === 0) {
    throw new Error(`${lesson.title} 的练习说明不能为空。`);
  }

  if (!Array.isArray(lesson.debugCase.reason) || lesson.debugCase.reason.length === 0) {
    throw new Error(`${lesson.title} 的改错说明不能为空。`);
  }

  if (!Array.isArray(lesson.review) || lesson.review.length < 3) {
    throw new Error(`${lesson.title} 的复盘清单至少需要三项。`);
  }

  if (normalizeComparableCode(lesson.practice.starter) === normalizeComparableCode(lesson.debugCase.broken)) {
    throw new Error(`${lesson.title} 的练习和改错代码不能完全相同。`);
  }
}

const lessonTitles = new Set(lessonCatalog.map((lesson) => lesson.title));
if (lessonTitles.size !== lessonCatalog.length) {
  throw new Error('课程标题不能重复。');
}

export const lessons = lessonCatalog.map((lesson, index) => {
  const normalizedLesson = {
    ...lesson,
    id: String(index + 1),
  };

  validateLesson(normalizedLesson);
  return normalizedLesson;
});

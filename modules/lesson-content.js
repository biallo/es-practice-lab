export function getSelectedLesson(lessons, selectedLessonId) {
  return lessons.find((item) => item.id === selectedLessonId) || lessons[0];
}

export function getPracticeDraft(lesson, state) {
  return state.practiceDrafts[lesson.id] ?? getPractice(lesson).starter;
}

export function getDebugDraft(lesson, state) {
  return state.debugDrafts[lesson.id] ?? getDebugCase(lesson).broken;
}

export function getPractice(lesson) {
  return {
    prompt: lesson.practice?.prompt ?? lesson.exercise,
    starter: lesson.practice?.starter ?? createPracticeStarter(lesson),
    answer: lesson.practice?.answer ?? lesson.correctCode,
    explanation: lesson.practice?.explanation ?? lesson.explanation,
  };
}

export function getDebugCase(lesson) {
  return {
    title: lesson.debugCase?.title ?? '改错练习',
    broken: lesson.debugCase?.broken ?? lesson.starterCode,
    fixed: lesson.debugCase?.fixed ?? lesson.correctCode,
    reason: lesson.debugCase?.reason ?? lesson.explanation,
  };
}

export function getReviewItems(lesson) {
  return lesson.review ?? [
    `能说出 ${lesson.title} 解决的问题。`,
    '独立完成练习题，并能解释自己的写法。',
    '能指出错误代码的问题，并写出修正版本。',
    '理解参考答案中的关键语法和适用场景。',
  ];
}

export function getExplanationItems(lesson) {
  if (Array.isArray(lesson.explanation)) {
    return lesson.explanation;
  }

  if (Array.isArray(lesson.concept)) {
    return lesson.concept;
  }

  return [lesson.explanation];
}

function createPracticeStarter(lesson) {
  return `// 练习：${lesson.exercise}\n// 请在下面写出你的实现，再运行或对照参考答案。\n`;
}

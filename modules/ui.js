export function scrollLessonContentToTop(mainContentEl) {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const options = { block: 'start', behavior: prefersReducedMotion ? 'auto' : 'smooth' };

  if (window.matchMedia('(max-width: 980px)').matches) {
    mainContentEl.scrollIntoView(options);
    return;
  }

  mainContentEl.scrollTo({ top: 0, behavior: options.behavior });
  window.scrollTo({ top: 0, behavior: options.behavior });
}

export function scrollActiveLessonIntoListView(activeLessonItem, lessonListEl) {
  if (!activeLessonItem || window.matchMedia('(max-width: 980px)').matches) {
    return;
  }

  requestAnimationFrame(() => {
    const listHeight = lessonListEl.clientHeight;
    if (!listHeight) {
      return;
    }

    const targetTop = activeLessonItem.offsetTop - (listHeight - activeLessonItem.offsetHeight) / 2;
    lessonListEl.scrollTo({ top: Math.max(0, targetTop), behavior: 'auto' });
  });
}

export const waitAnimationEnd = (el: HTMLElement | null): Promise<void> => {
  return new Promise((resolve) => {
    if (!el) {
      resolve();
      return;
    }

    el.addEventListener("animationend", () => {
      resolve();
    });
  });
};

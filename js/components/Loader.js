export const initializeLoader = (display) => {
  const loaderContaiener = document.querySelector('.loader-wrap');

  if (!display) {
    loaderContaiener.style.opacity = 0;
    setTimeout(() => {
      loaderContaiener.style.display = 'none';
    }, 500);
  }
};

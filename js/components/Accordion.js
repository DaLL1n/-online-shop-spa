export const initializeAccordion = () => {
  //  1. Получение всех кнопок аккордеона
  const accordionButtons = document.querySelectorAll('.accordion__btn');

  //  2. Установка обработчиков для каждой кнопки
  accordionButtons.forEach((button) => {
    button.addEventListener('click', () => {
      //  3. Проверка текущего состояния кнопки (открыта или закрыта)
      const isButtonExpanded = button.classList.contains('accordion__btn--active');

      //  4. Закрытие всех открытых элементов
      accordionButtons.forEach((accordionButton) => {
        accordionButton.classList.remove('accordion__btn--active');
      });

      //  5. Открытие текущего элемента, если он был закрыт
      if (!isButtonExpanded) {
        button.classList.add('accordion__btn--active');
      }
    });
  });
};


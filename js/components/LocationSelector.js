const citySelectionButton = document.querySelector('.location__city'); // 1. Получаем кнопку выбора города
const cityNameElement = document.querySelector('.location__city-name'); // 2. Получаем элемент с названием города

export const initializeLocationSelector = () => {
  if (!citySelectionButton) return; // 3. Если кнопка выбора города не найдена, выходим из функции

  // 4. Добавляем обработчик клика на кнопку выбора города
  citySelectionButton.addEventListener('click', () => {
    citySelectionButton.classList.toggle('location__city--active'); // 5. Переключаем класс активности у кнопки
  });

  const citySublinks = document.querySelectorAll('.location__sublink'); // 6. Получаем все подссылки выбора города

  // 7. Перебираем все подссылки выбора города
  citySublinks.forEach((sublink) => {
    sublink.addEventListener('click', handleCitySublinkClick); // 8. Добавляем обработчик клика на каждую подссылку
  });
};

// 1. Обработчик клика по подссылке города
const handleCitySublinkClick = (e) => {
  const newCityName = e.target.textContent; // 2. Получаем название нового города из текста подссылки

  cityNameElement.textContent = newCityName; // 3. Обновляем название города

  citySelectionButton.classList.remove('location__city--active'); // 4. Удаляем класс активности у кнопки выбора города
};

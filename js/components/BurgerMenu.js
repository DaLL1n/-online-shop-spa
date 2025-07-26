export const toggleCatalogMenu = () => {
  const catalogMenuElement = document.querySelector('.main-menu'); // 1. Получаем элемент меню каталога

  const openMenuButton = document.querySelector('.header__catalog-btn'); // 2. Кнопка для открытия меню каталога

  const closeMenuButton = document.querySelector('.main-menu__close'); // 3. Кнопка для закрытия меню каталога

  // 4. Проверяем, все ли элементы найдены
  if (!openMenuButton || !closeMenuButton || !catalogMenuElement) {
    console.error('Не удалось найти один из элементов');
    return;
  }

  // 5. Добавляем обработчик клика на кнопку открытия меню
  openMenuButton.addEventListener('click', () => {
    catalogMenuElement.classList.toggle('main-menu--active'); // 6. Переключаем класс активности у меню
  });

  // 7. Добавляем обработчик клика на кнопку закрытия меню
  closeMenuButton.addEventListener('click', () => {
    catalogMenuElement.classList.remove('main-menu--active'); // 8. Удаляем класс активности у меню
  });
};

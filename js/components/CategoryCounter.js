import { getAllProducts } from '../store/CatalogState.js';

// Функция обновления счетчиков категорий
export const updateCategoryCounters = () => {
  const categoryCounts = getCategoryCounts(); // 2. Получаем объект с количеством товаров по категориям

  // 3. Перебираем категории
  for (let category in categoryCounts) {
    // 4. Находим обертку чекбокса для текущей категории
    const checkboxWrapper = document.querySelector(
      `.custom-checkbox--${category}`,
    );

    // 5. Если обертка найдена
    if (checkboxWrapper) {
      // 6. Находим элемент, отображающий количество товаров
      const countElement = checkboxWrapper.querySelector(
        '.custom-checkbox__count',
      );

      // 7. Если элемент найден
      if (countElement) {
        countElement.textContent = categoryCounts[category]; // 8. Обновляем текст элемента количеством товаров
      }
    }
  }
};

// 1. Функция получения объекта с количеством товаров по категориям
const getCategoryCounts = () => {
  const products = getAllProducts(); // 2. Получаем все продукты из состояния

  // 3. Задаем начальные значения счетчиков для каждой категории
  const initialCounts = {
    pendant: 0,
    ceiling: 0,
    overhead: 0,
    point: 0,
    nightlights: 0,
  };

  // 4. Перебираем все продукты
  for (let { type: productCategory } of products) {
    // 5. Перебираем категории для каждого продукта
    productCategory.forEach((category) => {
      initialCounts[category] += 1; // 6. Увеличиваем счетчик для категории
    });
  }

  // 7. Возвращаем объект с количеством товаров
  return initialCounts;
};

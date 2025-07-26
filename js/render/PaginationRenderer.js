import { getItemsPerPage, getSortedProducts } from '../store/CatalogState.js';
import { createTagElement } from '../utils/ElementCreator.js';

const paginationListElement = document.querySelector('.catalog__pagination'); // Получаем список элементов пагинации

// Функция рендеринга пагинации
export const renderPaginationLinks = () => {
  const totalItemsCount = getSortedProducts().length; // 1. Получаем длину списка товаров
  const itemsPerPageCount = getItemsPerPage(); // 2. Получаем количество товаров на странице

  paginationListElement.innerHTML = ''; // 3. Очищаем список элементов пагинации перед добавлением новых

  if (totalItemsCount <= itemsPerPageCount) return; // 4. Если количество товаров меньше или равно количеству товаров на странице, то выходим из функции

  const totalPagesCount = Math.ceil(totalItemsCount / itemsPerPageCount); // 5. Вычисляем количество страниц по количеству товаров и количеству товаров на странице

  // 6. Добавляем элементы пагинации в список по количеству страниц
  for (let i = 1; i <= totalPagesCount; i++) {
    // 7. Создаем элемент пагинации
    const paginationItemElement = createTagElement('li', [
      'catalog__pagination-item',
    ]);

    // 8. Создаем кнопку-ссылку в элементе пагинации с номером страницы товаров
    const pageLinkElement = createTagElement(
      'button',
      ['catalog__pagination-link'],
      {
        text: i,
        'data-page': i,
      },
    );

    paginationItemElement.append(pageLinkElement); // 9. Добавляем кнопку-ссылку в элемент пагинации
    paginationListElement.append(paginationItemElement); // 10. Добавляем элемент пагинации в список пагинации
  }
};

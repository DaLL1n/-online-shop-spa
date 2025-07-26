import { updateUI } from '../components/App.js';
import { setCurrentPage } from '../store/CatalogState.js';

const paginationElement = document.querySelector('.catalog__pagination'); // Получаем список элементов пагинации

// Функция инициализации пагинации
export const initializePagination = () => {
  // 1. Добавляем обработчик клика на список элементов пагинации
  paginationElement.addEventListener('click', (e) => {
    const paginationLinkElement = e.target.closest('.catalog__pagination-link'); // 2. Получаем ссылку на элемент пагинации на которую кликнули

    if (!paginationLinkElement) return; // 3. Если кликнули не на список пагинации, выходим из функции

    const pageNumber = parseInt(paginationLinkElement.dataset.page, 10); // 4. Получаем номер страницы из атрибута data-page у кнопки пагинации

    setCurrentPage(pageNumber); // 5. Устанавливаем номер страницы в хранилище CatalogState
    updateUI(); // 6. Обновляем интерфейс
  });
};

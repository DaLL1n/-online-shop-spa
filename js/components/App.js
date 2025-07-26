import { renderCatalog } from '../render/CatalogRenderer.js';
import { updateCategoryCounters } from './CategoryCounter.js';
import { getProductsToRender } from '../store/CatalogState.js';
import { renderPaginationLinks } from '../render/PaginationRenderer.js';
import { initializeTooltips } from '../modules/TooltipInitializer.js';

// Функция обновления каталога товаров
export const updateUI = () => {
  const currentProducts = getProductsToRender(); // Получаем актуальный список товаров

  renderCatalog(currentProducts); // Отрисовываем карточки товаров
  renderPaginationLinks(); // Отрисовываем пагинацию

  updateCategoryCounters(); // Обновляем счетчики категорий

  initializeTooltips(); // Инициализируем тултипы
};

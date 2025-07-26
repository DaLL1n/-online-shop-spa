import ProductCard from '../components/ProductCard.js';
import { createTagElement } from '../utils/ElementCreator.js';

// Рендер списка карточек товаров на странице
export const renderCatalog = (products) => {
  const catalogListElement = document.querySelector('.catalog__list'); // 1. Получаем список карточек товаров
  catalogListElement.innerHTML = ''; // 2. Очищаем список карточек товаров перед добавлением новых

  // 3. Проходимся по массиву товаров
  products.forEach((product) => {
    const productCard = new ProductCard(product).createCard(); // 4. Создаем карточку товара

    const catalogItemElement = createTagElement('li', ['catalog__item']); // 5. Создаем элемент списка карточек
    catalogItemElement.append(productCard); // 6. Добавляем карточку товара в элемент списка
    catalogListElement.append(catalogItemElement); // 7. Добавляем элемент списка карточек в список товаров
  });
};

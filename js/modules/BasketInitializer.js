import { renderBasket } from '../render/BasketRenderer.js';
import {
  addProductToBasket,
  removeProductFromBasket,
} from '../store/BasketState.js';

//  Инициализирует функциональность корзины: открытие/закрытие и начальная отрисовка.
export const initBasket = () => {
  const basketButtonElement = document.querySelector('.header__user-btn'); // 1. Получение кнопки корзины в шапке для добавления обработчика

  // 2. Проверка, найдена ли кнопка корзины, для предотвращения ошибок
  if (basketButtonElement) {
    const basketList = document.querySelector('.basket'); // 3. Получение DOM-элемента выпадающего списка корзины

    // 4. Назначение обработчика клика для открытия/закрытия корзины
    basketButtonElement.addEventListener('click', () => {
      basketList.classList.toggle('basket--active'); // 5. Переключение CSS-класса для показа или скрытия корзины
    });
  }

  renderBasket(); // 6. Вызов функции первоначальной отрисовки корзины при загрузке страницы
};

// Обрабатывает добавление товара в корзину.
export const handleAddToBasket = (productData, e) => {
  e.preventDefault();

  // 1. Создание упрощенного объекта товара только с нужными для корзины данными
  const product = {
    id: productData.id,
    image: productData.image,
    name: productData.name,
    price: productData.price.new,
  };
  if (!product) return; // 2. Проверка на случай, если данные о товаре некорректны

  addProductToBasket(product); // 3. Добавление товара в корзину с помощью хранилища BasketState
  renderBasket(); // 4. Перерисовка корзины после добавления товара в корзину
};

// Обрабатывает удаление товара из корзины по его id
export const handleRemoveFromBasket = (id) => {
  removeProductFromBasket(id); // 1. Удаление товара из корзины с помощью хранилища BasketState
  renderBasket(); // 2. Перерисовка корзины после удаления товара из корзины
};

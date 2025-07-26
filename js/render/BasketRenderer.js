import BasketItem from '../components/BasketItem.js';
import { getProductsInBasket } from '../store/BasketState.js';

// Рендер корзины по данным из хранилища BasketState
export const renderBasket = () => {
  const basketProducts = getProductsInBasket(); // 1. Получение всех товаров из хранилища BasketState

  updateEmptyBasketVisibility(basketProducts); // 2. Обновление видимости блока пустой корзины
  updateHeaderCounter(basketProducts); // 3. Обновление счетчика о количество товаров в корзине
  const basketItems = populateBasketList(basketProducts); // 4. Создание элементов корзины по данным из хранилища BasketState

  const basketList = document.querySelector('.basket__list'); // 5. Получение DOM-элемента списка корзины

  // 6. Проверка, наличие элемента списка корзины
  if (!basketList) return;
  basketList.innerHTML = ''; // 7. Очистка содержимого списка корзины перед добавлением новых элементов

  basketList.append(...basketItems); // 8. Добавление элементов корзины в список
};

// Обновление видимости блока пустой корзины
const updateEmptyBasketVisibility = (products) => {
  const emptyBasketBlock = document.querySelector('.basket__empty-block'); // 1. Получение DOM-элемента блока пустой корзины
  emptyBasketBlock.style.display = products.length > 0 ? 'none' : 'block'; // 2. Обновление CSS-свойства display блока пустой корзины
};

// Обновление счетчика о количестве товаров в корзине
const updateHeaderCounter = (products) => {
  const basketCounter = document.querySelector('.header__user-count'); // 1. Получение DOM-элемента счетчика товаров в корзине
  basketCounter.textContent = products.length; // 2. Обновление текста счетчика товаров в корзине
};

// Функция для создания элементов корзины
const populateBasketList = (products) => {
  // 1. Перебор всех товаров из хранилища BasketState и вовращение массива элементов корзины
  return products.map((product) => {
    return new BasketItem(product).createBasketItem(); // 2. Создание элемента корзины и возврат его
  });
};

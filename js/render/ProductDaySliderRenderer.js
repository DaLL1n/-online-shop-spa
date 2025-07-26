import ProductCardDay from '../components/ProductCardDay.js';

import { initializeTooltips } from '../modules/TooltipInitializer.js';
import { createTagElement } from '../utils/ElementCreator.js';

// Функция рендеринга карточек товаров "Товар дня"
export const renderProductDaySliderContent = (products) => {
  const productsDayList = document.querySelector('.day-products__list'); // 1. Получаем список карточек товаров "Товар дня"
  productsDayList.innerHTML = ''; // 2. Очищаем список карточек товаров перед добавлением новых

  const productsDayItems = createProductListItems(products); // 3. Получаем карточки товаров "Товар дня"
  productsDayList.append(...productsDayItems); // 4. Добавляем карточки товаров "Товар дня" в список

  initializeSlider(); // 5. Инициализируем слайдер
  initializeTooltips(); // 6. Инициализируем тултипы
};

// Функция создания карточек товаров "Товар дня"
const createProductListItems = (products) => {
  // 1. Проходимся по массиву товаров и возвращаем массив карточек
  return products.map((product) => {
    const productCardDay = new ProductCardDay(product).createCard(); // 2. Создаем карточку товара

    // 3. Создаем элемент списка карточек
    const productListItem = createTagElement('li', [
      'day-products__item',
      'swiper-slide',
    ]);
    productListItem.append(productCardDay); // 4. Добавляем карточку товара в элемент списка

    return productListItem; // 5. Возвращаем элемент списка
  });
};

// Функция инициализации слайдера "Товар дня"
const initializeSlider = () => {
  new Swiper('.swiper', {
    slidesPerView: 4,
    spaceBetween: 40,
    navigation: {
      nextEl: '.day-products__navigation-btn--next',
      prevEl: '.day-products__navigation-btn--prev',
    },
  });
};

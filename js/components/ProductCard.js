import { handleAddToBasket } from '../modules/BasketInitializer.js';
import { createSvgElement, createTagElement } from '../utils/ElementCreator.js';
import { createPriceBlock } from '../utils/PriceBlockCreator.js';
import { createProductTooltip } from './ProductTooltip.js';

// Создание и управление карточкой товара
export default class ProductCard {
  #product;

  constructor(product) {
    this.#product = product;
  }
  // Создание и возвращание готового DOM-элемента карточки товара
  createCard() {
    const infoBlock = this._createInfoBlock(); // 1. Создание информационного блока
    const visualBlock = this._createVisualBlock(); // 2. Создание визуального блока

    const productCardElement = createTagElement('div', ['product-card']); // 3. Создание корневого div-элемента для всей карточки
    productCardElement.append(visualBlock, infoBlock); // 4. Сборка карточки: добавление визуального и информационного блоков

    return productCardElement; // 5. Возврат готового DOM-элемента карточки
  }

  // Создает блок с кнопками действий
  _createActionsBlock() {
    // 1. Создание кнопки "В корзину" в виде ссылки
    const basketButtonElement = createTagElement(
      'a',
      ['product-card__link', 'btn', 'btn--icon'],
      {
        href: '#',
      },
    );

    // 2. Сборка кнопки "В корзину": добавление текста и иконки
    basketButtonElement.append(
      createTagElement('span', ['btn__text'], { text: 'В корзину' }),
      createSvgElement(24, 24, 'icon-basket'),
    );

    // 3. Добавление обработчика клика для добавления товара в корзину
    basketButtonElement.addEventListener('click', (e) =>
      handleAddToBasket(this.#product, e),
    );

    // 4. Создание кнопки "Подробнее"
    const detailsButtonElement = createTagElement(
      'a',
      ['product-card__link', 'btn', 'btn--secondary'],
      { href: '#' },
    );
    detailsButtonElement.append(
      createTagElement('span', ['btn__text'], { text: 'Подробнее' }), // 5. Добавление текста на кнопку "Подробнее"
    );

    const actionsElement = createTagElement('div', ['product-card__more']); // 6. Создание контейнера для обеих кнопок
    actionsElement.append(basketButtonElement, detailsButtonElement); // 7. Помещение кнопок в контейнер

    return actionsElement; // 8. Возврат блока с кнопками
  }

  // Создает визуальный блок карточки (изображение и блок действий)
  _createVisualBlock() {
    // 1. Создание элемента изображения товара
    const imageElement = createTagElement('img', ['product-card__img'], {
      src: this.#product.image,
      height: '436',
      width: '290',
      alt: 'Изображение товара',
      loading: 'lazy',
    });

    const actionsElement = this._createActionsBlock(); // 2. Получение блока с кнопками действий

    const visualElement = createTagElement('div', ['product-card__visual']); // 3. Создание общего контейнера для визуальной части карточки
    visualElement.append(imageElement, actionsElement); // 4. Помещение изображения и кнопок в контейнер визуальной части

    return visualElement; // 5. Возврат готового визуального блока карточки
  }

  // Создает информационный блок карточки (название, цены, тултип)
  _createInfoBlock() {
    const { new: newPrice, old: oldPrice } = this.#product.price;

    const infoElement = createTagElement('div', ['product-card__info']); // 1. Создание общего контейнера для информационной части карточки

    // 2. Сборка инфо-блока: добавление названия, старой цены, новой цены и тултипа
    infoElement.append(
      createTagElement('h2', ['product-card__title'], {
        text: this.#product.name,
      }),
      createPriceBlock('old', oldPrice),
      createPriceBlock('price', newPrice),
      createProductTooltip(this.#product.availability),
    );

    return infoElement; // 3. Возврат готового инфо-блока карточки
  }
}

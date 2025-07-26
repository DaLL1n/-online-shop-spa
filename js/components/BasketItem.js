import { handleRemoveFromBasket } from '../modules/BasketInitializer.js';
import { createSvgElement, createTagElement } from '../utils/ElementCreator.js';

export default class BasketItem {
  constructor(productData) {
    this.productData = productData;
  }

  // Создание элемента корзины
  createBasketItem() {
    const itemContainer = createTagElement('li', ['basket__item']); // Создание контейнера элемента корзины

    const imageContainer = createTagElement('div', ['basket__img']); // Создание контейнера для изображения
    imageContainer.append(
      createTagElement('img', [], {
        src: this.productData.image,
        alt: 'Фотография товара',
        height: 60,
      }),
    );

    // Создание кнопки удаления
    const deleteButton = createTagElement('button', ['basket__close'], {
      type: 'button',
    });

    deleteButton.append(createSvgElement(24, 24, 'icon-close')); // Добавление иконки удаления

    // Добавление обработчика события удаления
    deleteButton.addEventListener('click', () =>
      handleRemoveFromBasket(this.productData.id),
    );

    itemContainer.append(
      imageContainer,
      createTagElement('span', ['basket__name'], {
        text: this.productData.name,
      }),
      createTagElement('span', ['basket__price'], {
        text: `${this.productData.price} руб`,
      }),
      deleteButton,
    );
    itemContainer.dataset.id = this.productData.id; // Установка ID продукта в атрибут данных

    return itemContainer; // Возвращение полностью собранного элемента корзины
  }
}

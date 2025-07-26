import ProductCard from './ProductCard.js';

//  Класс для карточки "Товар дня", наследующий функциональность базовой карточки
export default class ProductCardDay extends ProductCard {
  constructor(product) {
    super(product);
  }

  //  Создает DOM-элемент для карточки "Товар дня", добавляя к нему специальные стили
  createCard() {
    const baseCard = super.createCard(); // 1. Создание стандартной карточки товара через вызов родительского метода

    baseCard.classList.add('product-card--small'); // 2. Добавление модификатора стиля для карточки товара "Товар дня"

    return baseCard; // 3. Возврат карточки "Товар дня"
  }
}

import { createTagElement } from './ElementCreator.js';

/**
 * Создает DOM-блок для отображения цены.
 * @param  type - Тип цены ('old' или 'price').
 * @param  value - Значение цены.
 * @param  currency - Символ валюты.
 * @returns  Готовый span-элемент с ценой.
 */
export const createPriceBlock = (type, value, currency = '₽') => {
  if (typeof value !== 'number') {
    return value;
  }

  const priceElement = createTagElement('span', [`product-card__${type}`]);

  priceElement.append(
    createTagElement('span', [`product-card__${type}-number`], {
      text: value.toLocaleString('ru-RU'),
    }),
    createTagElement('span', [`product-card__${type}-add`], {
      text: currency,
    }),
  );

  return priceElement;
};

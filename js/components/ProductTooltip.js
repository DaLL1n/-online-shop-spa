import { createSvgElement, createTagElement } from '../utils/ElementCreator.js';

// Объект-словарь для сопоставления ключей городов с их полными названиями
const cities = {
  moscow: 'Москва',
  orenburg: 'Оренбург',
  saintPetersburg: 'Санкт-Петербург',
};

// Создает основной DOM-элемент тултипа (всплывающей подсказки) о наличии товара по городам
export const createProductTooltip = (availability) => {
  const listAvailableCities = createListAvailableCities(availability); // 1. Создание списка городов, где товар в наличии

  // 2. Создание корневого элемента тултипа
  const tooltipElement = createTagElement('div', [
    'product-card__tooltip',
    'tooltip',
  ]);

  // 3. Создание кнопки, по клику на которую будет открываться тултип
  const tooltipButtonElement = createTagElement('button', ['tooltip__btn'], {
    type: 'button',
  });
  tooltipButtonElement.append(createSvgElement(5, 10, 'icon-i')); // 4. Добавление иконки в кнопку

  const tooltipContentElement = createTagElement('div', ['tooltip__content']); // 5. Создание контейнера для содержимого тултипа

  // 6. Добавление текста-заголовка и списка городов в контейнер тултипа
  tooltipContentElement.append(
    createTagElement('span', ['tooltip__text'], {
      text: 'Наличие товара по городам:',
    }),
    listAvailableCities,
  );
  tooltipElement.append(tooltipButtonElement, tooltipContentElement); // 7. Сборка тултипа: добавление кнопки и контейнера с содержимым

  return tooltipElement; // 8. Возврат готового элемента тултипа
};

// Создает и возвращает HTML-список (ul) городов с указанием количества товара по городам.
const createListAvailableCities = (availability) => {
  const tooltipListElement = createTagElement('ul', ['tooltip__list']); // 1. Создание базового элемента списка (ul)

  // 2. Перебор объекта с городами и количеством товара в них
  for (let [cityKey, count] of Object.entries(availability)) {
    const listItemElement = createTagElement('li', ['tooltip__item']); // 3. Создание элемента списка (li) для каждого города

    // 4. Создание текстового блока для названия города
    const tooltipTextElement = createTagElement('span', ['tooltip__text'], {
      text: `${cities[cityKey]}: `,
    });

    // 5. Добавление элемента с количеством товара к текстовому блоку
    tooltipTextElement.append(
      createTagElement('span', ['tooltip__count'], {
        text: count,
      }),
    );

    listItemElement.append(tooltipTextElement); // 6. Помещение текстового блока в элемент списка
    tooltipListElement.append(listItemElement); // 7. Добавление элемента города в общий список
  }

  return tooltipListElement; // 8. Возврат созданного HTML-списка
};

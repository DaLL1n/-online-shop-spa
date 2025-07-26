/**
 * Создает HTML-элемент с указанным тегом, классами и атрибутами.
 * @param  tag - Название HTML-тега.
 * @param  classNames - Массив CSS-классов для добавления к элементу.
 * @param  attributes={} - Объект с атрибутами, где ключ - имя атрибута, а значение - его значение (например, { href: '#', 'data-id': 123 }).
 * @returns Созданный HTML-элемент.
 */
export const createTagElement = (tag, classNames, attributes = {}) => {
  const tagElement = document.createElement(tag);

  if (classNames && classNames.length > 0) {
    tagElement.classList.add(...classNames);
  }

  if (attributes) {
    Object.entries(attributes).forEach(([key, value]) => {
      if (key === 'text') {
        tagElement.textContent = value;
      } else {
        tagElement.setAttribute(key, value);
      }
    });
  }

  return tagElement;
};

/**
 * Создает SVG-иконку из спрайта с помощью тега <use>.
 * @param  width - Ширина SVG-иконки в пикселях.
 * @param height - Высота SVG-иконки в пикселях.
 * @param  href - ID иконки в SVG-спрайте (без символа #).
 * @returns  Готовый SVG-элемент <svg>.
 */
export const createSvgElement = (width, height, href) => {
  const svgNS = 'http://www.w3.org/2000/svg';
  const xlinkNS = 'http://www.w3.org/1999/xlink';

  const svgElement = document.createElementNS(svgNS, 'svg');
  svgElement.setAttribute('width', width);
  svgElement.setAttribute('height', height);
  svgElement.setAttribute('aria-hidden', 'true');

  const useElement = document.createElementNS(svgNS, 'use');
  useElement.setAttributeNS(xlinkNS, 'xlink:href', `images/sprite.svg#${href}`);

  svgElement.appendChild(useElement);

  return svgElement;
};

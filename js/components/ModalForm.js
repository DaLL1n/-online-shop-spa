import { createSvgElement, createTagElement } from '../utils/ElementCreator.js';

// Создает модальное окно с текстом ошибки или благодарности
export default class ModalForm {
  constructor(isError) {
    this.isError = isError;
  }

  //  Выводим модальное окно
  show() {
    const modalElement = createTagElement('div', ['modal-form', 'hidden']); // 1. Создаем контейнер

    const modalContentElement = createTagElement('div', ['modal-form__block']); // 2. Создаем контент

    // 3. Создаем кнопку закрытия
    const closeButtonElement = createTagElement(
      'button',
      ['modal-form__close'],
      {
        type: 'button',
      },
    );

    closeButtonElement.addEventListener('click', () => {
      modalElement.classList.add('hidden'); // 4. Закрываем модальное окно при клике
    });

    const iconId = this.isError ? 'icon-warning' : 'check-circle'; // 5. Выбираем иконку

    const titleText = this.isError
      ? 'Не удалось отправить обращение'
      : 'Благодарим за обращение!'; // 6. Выбираем заголовок

    const messageText = this.isError
      ? 'Что-то пошло не так, попробуйте отправить форму еще раз. Если ошибка повторится — свяжитесь со службой поддержки.'
      : 'Мы получили вашу заявку и свяжемся с вами в ближайшее время'; // 7. Выбираем текст сообщения

    modalContentElement.append(
      closeButtonElement, // 8. Добавляем кнопку закрытия
      createSvgElement(44, 44, iconId), // 9. Добавляем иконку
      createTagElement('h2', ['modal-form__title'], { text: titleText }), // 10. Добавляем заголовок
      createTagElement('p', ['modal-form__text'], { text: messageText }), // 11. Добавляем текст сообщения
    );

    modalElement.append(modalContentElement); // 12. Добавляем контент в контейнер

    return modalElement; // 13. Возвращаем модальное окно
  }
}

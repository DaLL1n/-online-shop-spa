import ModalForm from '../components/ModalForm.js';

// Функция отображения модального окна
export const showModal = (isError = false) => {
  const modalElement = new ModalForm(isError).show(); // 1. Создаем модальное окно сообщения

  modalElement.classList.remove('hidden'); // 2. Показываем модальное окно сообщения
  document.body.appendChild(modalElement); // 3. Добавляем модальное окно сообщения на страницу
};

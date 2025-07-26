import sendFeedbackForm from '../api/FormsApi.js';
import createValidator from '../utils/Validation.js';

// Функция инициализации формы обратной связи
export const initializeFeedbackForm = () => {
  const feedbackForm = document.querySelector('.questions__form'); // 1. Получаем форму обратной связи

  // 2. Получаем поля формы обратной связи
  const inputs = {
    name: feedbackForm.querySelector('#name'),
    email: feedbackForm.querySelector('#email'),
    checkbox: feedbackForm.querySelector(`#agree`),
  };

  const formValidator = createValidator(feedbackForm, inputs); // 3. Создаем валидатор формы обратной связи с использованием функции createValidator

  // 4. Добавляем обработчик событий на отправку формы
  feedbackForm.addEventListener('submit', async (e) => {
    e.preventDefault(); // 5. Предотвращаем отправку формы

    formValidator.validate(); // 6. Проверяем валидацию формы обратной связи с помощью валидатора

    if (!formValidator.isValid) return; // 7. Если форма не валидна, выходим из функции и не отправляем данные формы

    // 8. Создаем объект с данными формы обратной связи
    const formData = {
      name: inputs.name.value,
      email: inputs.email.value,
      agree: inputs.checkbox.checked,
    };

    const isSuccess = await handleFormSubmit(formData); // 9. Отправляем данные формы обратной связи и получаем результат валидации

    if (isSuccess) feedbackForm.reset(); // 10. Сбрасываем форму обратной связи после успешной отправки
  });
};

// Функция отправки формы обратной связи и обработки результата
const handleFormSubmit = async (data) => {
  // 1. Импортируем showModal из модуля ModalController для отображения модального окна сообщения об успешной отправке формы
  const { showModal } = await import('./ModalController.js');
  try {
    await sendFeedbackForm(data); // 2. Отправляем данные формы обратной связи на сервер

    showModal(); // 3. Отображаем модальное окно сообщения об успешной отправке формы
    return true; // 4. Возвращаем true после успешной отправки
  } catch (error) {
    console.error(error.message); // 5. Выводим сообщение об ошибке в консоль

    showModal(true); // 6. Отображаем модальное окно сообщения об ошибке
    return false; // 7. Возвращаем false в случае ошибки
  }
};

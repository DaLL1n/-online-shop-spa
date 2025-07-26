import {
  applyFilters,
  setSortParam,
  setCategories,
  setAvailability,
} from '../store/CatalogState.js';

const selectedCategories = new Set(); // Множество выбранных категорий продуктов для фильтрации по категориям

// Обработчики событий селектора сортировки
const handleSorting = (e) => {
  setSortParam(e.target.value); // 1. Устанавливаем параметр сортировки в хранилище CatalogState по выбранному значению селектора
  applyFilters(); // 2. Применяем фильтры при изменении параметра сортировки
};

// Обработчики событий чекбоксов категорий продуктов для фильтрации по категориям
const handleCategoryFilters = (e) => {
  const { value, checked } = e.target; // 1. Получаем значение и состояние чекбокса

  // 2. Если чекбокс выбран, добавляем его значение в множество выбранных категорий, иначе удаляем
  if (checked) {
    selectedCategories.add(value);
  } else {
    selectedCategories.delete(value);
  }

  setCategories(...selectedCategories); // 3. Устанавливаем выбранные категории в хранилище CatalogState
  applyFilters(); // 4. Применяем фильтры при изменении выбранных категорий
};

// Обработчики событий для фильтрации по наличию продуктов
const handleAvailabilityFilter = (e) => {
  setAvailability(e.target.value); // 1. Устанавливаем фильтр наличия продуктов в хранилище CatalogState
  applyFilters(); // 2. Применяем фильтры при изменении фильтра наличия
};

// Обработчик событий сброса формы фильтрации
const handleFilterFormReset = () => {
  selectedCategories.clear(); // 1. Очищаем множество выбранных категорий

  setCategories(...selectedCategories); // 2. Устанавливаем выбранные категории в хранилище CatalogState
  setAvailability('all-item'); // 3. Устанавливаем по умолчанию фильтр наличия продуктов в хранилище CatalogState
  applyFilters(); // 4. Применяем фильтры при сбросе формы
};

// Инициализация фильтров каталога при загрузке страницы
export const initializeCatalogFilters = () => {
  const filterForm = document.querySelector('.catalog-form'); // 1. Получение DOM-элемента формы фильтрации
  const sortingSelect = document.querySelector('.catalog__sort-select'); // 2. Получение DOM-элемента селектора сортировки

  // 3. Проверка, наличие элементов формы фильтрации и селектора сортировки
  if (!filterForm || !sortingSelect) {
    console.error(
      'Не найдены элементы формы фильтрации или селекта сортировки.',
    );
    return;
  }

  // 4. Получение DOM-элементов чекбоксов категорий продуктов
  const categoryCheckboxes = filterForm.querySelectorAll(
    '.custom-checkbox__field',
  );

  // 5. Получение DOM-элементов радио-кнопок наличия продуктов
  const availabilityRadios = filterForm.querySelectorAll(
    '.custom-radio__field',
  );

  // 6. Добавление обработчиков событий чекбоксов категорий продуктов
  categoryCheckboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', handleCategoryFilters);
  });

  // 7. Добавление обработчиков событий радио-кнопок наличия продуктов
  availabilityRadios.forEach((radio) => {
    radio.addEventListener('change', handleAvailabilityFilter);
  });

  filterForm.addEventListener('reset', handleFilterFormReset); // 8. Добавление обработчика событий сброса формы

  sortingSelect.addEventListener('change', handleSorting); // 9. Добавление обработчика событий изменения сортировки
};

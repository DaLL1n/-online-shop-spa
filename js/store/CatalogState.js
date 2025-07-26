import { updateUI } from '../components/App.js';
import { initializeLoader } from '../components/Loader.js';
import { renderProductDaySliderContent } from '../render/ProductDaySliderRenderer.js';

// Состояние каталога товаров
const catalogState = {
  allProducts: [],
  filteredProducts: [],
  sortedProducts: [],
  selectedCategories: [],
  availabilityFilter: 'all-item',
  sortingParameter: 'price-min',
  productsDay: [],
  currentPage: 1,
  itemsPerPage: 6,
};

// Методы изменения состояния
export const setCategories = (...categories) =>
  (catalogState.selectedCategories = categories);
export const setAvailability = (filter) =>
  (catalogState.availabilityFilter = filter);
export const setSortParam = (sortParameter) =>
  (catalogState.sortingParameter = sortParameter);
export const setCurrentPage = (page) => (catalogState.currentPage = page);

//  Методы получения данных
export const getFilteredProducts = () => catalogState.filteredProducts;
export const getSortedProducts = () => catalogState.sortedProducts;
export const getAllProducts = () => catalogState.allProducts;
export const getSelectedCategories = () => catalogState.selectedCategories;
export const getAvailabilityFilter = () => catalogState.availabilityFilter;
export const getSortParam = () => catalogState.sortingParameter;
export const getProductsDay = () => catalogState.productsDay;
export const getCurrentPage = () => catalogState.currentPage;
export const getItemsPerPage = () => catalogState.itemsPerPage;
export const getProductsToRender = () => {
  const page = getCurrentPage(); // 1. Получаем номер текущей страницы
  const limit = getItemsPerPage(); // 2. Получаем количество товаров на странице
  const products = getSortedProducts(); // 3. Получаем отсортированные товары

  const startIndex = (page - 1) * limit; // 4. Вычисляем индекс первого товара на текущей странице
  const endIndex = startIndex + limit; // 5. Вычисляем индекс последнего товара на текущей странице

  return products.slice(startIndex, endIndex); // 6. Возвращаем массив товаров на текущей странице
};

// Методы установки состояния каталога
export const initState = (products) => {
  catalogState.allProducts = products; // 1. Устанавливаем все товары в состояние
  applyFilters(); // 2. Применяем фильтры
  initializeProductsDaySlider(); // 3. Инициализируем товары дня
  initializeLoader();
};

// Методы применения фильтров и сортировки
export const applyFilters = () => {
  setCurrentPage(1); // Устанавливаем номер текущей страницы в 1

  const checkAvailability = getAvailabilityFilter(); // 1. Получаем фильтр по наличию товаров
  const categories = getSelectedCategories(); // 2. Получаем выбранные категории товаров
  let products = catalogState.allProducts; // 3. Получаем все товары из состояния

  // Фильтрация по наличию товара
  if (checkAvailability === 'instock') {
    products = products.filter(({ availability }) =>
      Object.values(availability).some((stock) => stock > 0),
    );
  }

  // фильтрация по категориям товаров
  if (categories.length > 0) {
    products = products.filter((product) =>
      product.type.some((type) => categories.includes(type)),
    );
  }

  catalogState.filteredProducts = products; // 4. Устанавливаем отфильтрованные товары

  applySorting(); // 5. Вызываем метод применения сортировки
};

// Метод применения сортировки
export const applySorting = () => {
  const productsToSort = getFilteredProducts(); // 1. Получаем отфильтрованные товары
  const sortParam = getSortParam(); // 2. Получаем параметр сортировки

  // Сортировка товаров выбранному параметру сортировки
  const sorted = [...productsToSort].sort((a, b) => {
    switch (sortParam) {
      case 'price-max':
        return b.price.new - a.price.new;

      case 'rating-max':
        return b.rating - a.rating;

      default:
        return a.price.new - b.price.new;
    }
  });

  catalogState.sortedProducts = sorted; // 3. Устанавливаем отсортированные товары

  updateUI(); // 4. Вызываем метод обновления интерфейса
};

// Метод инициализации товаров дня
export const initializeProductsDaySlider = () => {
  const products = getAllProducts(); // 1. Получаем все продукты из состояния

  // 2. Фильтруем товары, у которох goodsOfDay = true
  catalogState.productsDay = [...products].filter(
    (product) => product.goodsOfDay,
  );

  renderProductDaySliderContent(getProductsDay()); // 3. Рендерим содержимое карточек товаров "Товар дня"
};

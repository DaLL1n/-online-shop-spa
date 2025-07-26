// Получение данных корзины из localStorage
const getProductsFromStorage = () => {
  return JSON.parse(localStorage.getItem('basketProducts')) || []; // возвращаем массив товаров из localStorage или пустой массив
};

// Сохранение данных корзины в localStorage
const saveProductsToStorage = (products) => {
  localStorage.setItem('basketProducts', JSON.stringify(products)); // сохраняем массив товаров в localStorage под ключом 'basketProducts'
};

//  Добавление товара в корзину
export const addProductToBasket = (productData) => {
  const productsInBasket = getProductsFromStorage(); // 1. Получаем данные корзины из localStorage
  productsInBasket.push(productData); // 2. Добавляем товар в массив 'basketProducts' в localStorage
  saveProductsToStorage(productsInBasket); // 3. Сохраняем обновленные данные в localStorage
};

//  Удаление товара из корзины по id
export const removeProductFromBasket = (itemId) => {
  const productsInBasket = getProductsFromStorage(); // 1. Получаем данные корзины из localStorage
  const updatedBasket = productsInBasket.filter(({ id }) => id !== itemId); // 2. Удаляем товар из массива 'basketProducts' в localStorage
  saveProductsToStorage(updatedBasket); // 3. Сохраняем обновленные данные в localStorage
};

//  Получение всех товаров из корзины
export const getProductsInBasket = () => getProductsFromStorage();

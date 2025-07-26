const loadProducts = async () => {
  try {
    const response = await fetch('./data.json');

    if (!response.ok) {
      throw new Error(`Ошибка сети: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error('Не удалось загрузить данные:', error);
    throw error;
  }
};

export default loadProducts;

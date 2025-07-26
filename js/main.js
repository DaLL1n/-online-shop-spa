import productsApi from './api/ProductsApi.js';
import { toggleCatalogMenu } from './components/BurgerMenu.js';
import { initState } from './store/CatalogState.js';
import { initializeLocationSelector } from './components/LocationSelector.js';
import { initializeAccordion } from './components/Accordion.js';
import { initializeFeedbackForm } from './modules/FeedbackForm.js';
import { initializeCatalogFilters } from './modules/CatalogFilters.js';
import { initBasket } from './modules/BasketInitializer.js';
import { initializePagination } from './modules/PaginationController.js';

const initialize = async () => {
  toggleCatalogMenu();
  initializeLocationSelector();
  initializeAccordion();
  initializePagination();
  initializeCatalogFilters();
  initBasket();
  initializeFeedbackForm();

  const productsData = await productsApi();
  initState(productsData);
};

window.addEventListener('DOMContentLoaded', initialize);

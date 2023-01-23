import { combineReducers, legacy_createStore as createStore } from 'redux';

import booksReducer from './books/books';
import categoriesReducer from './categories/categories';

const reducers = combineReducers({
  book: booksReducer,
  categories: categoriesReducer,
});

const store = createStore(reducers);

export default store;

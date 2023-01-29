import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import booksReducer from './books/books';
import categoriesReducer from './categories/categories';

const reducer = { book: booksReducer, categories: categoriesReducer };

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;

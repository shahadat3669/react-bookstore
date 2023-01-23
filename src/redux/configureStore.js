import {
  combineReducers,
  applyMiddleware,
  legacy_createStore as createStore,
} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import booksReducer from './books/books';
import categoriesReducer from './categories/categories';

const reducers = combineReducers({
  book: booksReducer,
  categories: categoriesReducer,
});

const middleware = [logger, thunk];

const store = createStore(reducers, applyMiddleware(...middleware));

export default store;

import { combineReducers, legacy_createStore as createStore } from 'redux';

import booksReducer from './books/books';

const reducers = combineReducers({
  book: booksReducer,
});

const store = createStore(reducers);

export default store;

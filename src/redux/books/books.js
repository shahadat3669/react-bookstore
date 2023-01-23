import { ADD_BOOK, DELETE_BOOK } from '../actionTypes/bookTypes';

const defaultSate = [];

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const deleteBook = (payload) => ({
  type: DELETE_BOOK,
  payload,
});

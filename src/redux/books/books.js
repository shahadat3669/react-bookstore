import { ADD_BOOK, DELETE_BOOK, GET_BOOKS } from '../actionTypes/bookTypes';

const defaultSate = [];

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const deleteBook = (payload) => ({
  type: DELETE_BOOK,
  payload,
});

export const getBooks = (payload) => ({ type: GET_BOOKS, payload });

const reducer = (state = defaultSate, action) => {
  switch (action.type) {
    case GET_BOOKS:
      return action.payload;
    case ADD_BOOK:
      return [
        ...state,
        {
          item_id: action.payload.item_id,
          title: action.payload.title,
          author: action.payload.author,
          completed: 0,
          category: action.payload.category,
        },
      ];
    case DELETE_BOOK:
      return state.filter((book) => book.item_id !== action.payload);
    default:
      return state;
  }
};

export default reducer;

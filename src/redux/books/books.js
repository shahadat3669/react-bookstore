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

const reducer = (state = defaultSate, action) => {
  switch (action.type) {
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

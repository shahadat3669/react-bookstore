import { ADD_BOOK, DELETE_BOOK, GET_BOOKS } from '../actionTypes/bookTypes';
import { createBookApi, deleteBookApi, getAllBooksApi } from '../../utils/books.api';

const defaultSate = [];

export const addBook = (data) => async (dispatch) => {
  try {
    const response = await createBookApi(data);

    if (response.status === 201 && response.data === 'Created') {
      dispatch({ type: ADD_BOOK, payload: data });
    }
  } catch (err) {
    throw new Error(err);
  }
};

export const deleteBook = (id) => async (dispatch) => {
  try {
    const response = await deleteBookApi(id);

    if (
      response.status === 201
      && response.data === 'The book was deleted successfully!'
    ) {
      dispatch({ type: DELETE_BOOK, payload: id });
    }
  } catch (err) {
    throw new Error(err);
  }
};

export const getBooks = async (dispatch) => {
  try {
    const response = await getAllBooksApi();
    if (response.data.length === 0) {
      throw new Error('There are no books.');
    }
    const { data } = response;
    const books = Object.keys(data).map((key) => ({
      item_id: key,
      ...data[key][0],
    }));

    dispatch({ type: GET_BOOKS, payload: books });
  } catch (err) {
    throw new Error(err);
  }
};

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

import http from './http-common';

export const getAllBooksApi = () => http.get('/books');

export const createBookApi = (data) => http.post('/books', data);

export const deleteBookApi = (id) => http.delete(`/books/${id}`);

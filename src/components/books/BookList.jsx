import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from './BookList.module.scss';
import Book from './Book';
import AddBook from './AddBook';
import { getBooks } from '../../redux/books/books';

const BookList = () => {
  const books = useSelector((state) => state.book);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks);
  }, []);

  return (
    <section className={styles.books}>
      <div className={styles.books__list}>
        {books.map((book) => (
          <Book
            key={book.item_id}
            book={book}
          />
        ))}
      </div>

      <div className={styles.books__new}>
        <AddBook />
      </div>
    </section>
  );
};

export default BookList;

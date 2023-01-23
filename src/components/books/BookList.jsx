import React from 'react';
import { useSelector } from 'react-redux';

import styles from './BookList.module.scss';
import Book from './Book';
import AddBook from './AddBook';

const BookList = () => {
  const books = useSelector((state) => state.book);

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

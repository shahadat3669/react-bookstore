import React from 'react';

import styles from './BookList.module.scss';

import Book from './Book';
import AddBook from './AddBook';

const tempData = [
  {
    author: 'Suzanne Collins',
    category: 'Action',
    item_id: 'mock-1',
    progress: { completed: '64', currentChapter: 'Chapter 17' },
    completed: '64',
    currentChapter: 'Chapter 17',
    title: 'The Hunger Games',
  },
  {
    author: 'Suzanne Collins',
    category: 'Action',
    item_id: 'mock-2',
    progress: { completed: '64', currentChapter: 'Chapter 17' },
    completed: '64',
    currentChapter: 'Chapter 17',
    title: 'The Hunger Games',
  },
  {
    author: 'Suzanne Collins',
    category: 'Action',
    item_id: 'mock-3',
    progress: { completed: '64', currentChapter: 'Chapter 17' },
    completed: '64',
    currentChapter: 'Chapter 17',
    title: 'The Hunger Games',
  },
];

const BookList = () => (
  <section className={styles.books}>
    <div className={styles.books__list}>
      {tempData.map((book) => (
        <Book key={book.item_id} book={book} />
      ))}
    </div>

    <div className={styles.books__new}>
      <AddBook />
    </div>
  </section>
);

export default BookList;

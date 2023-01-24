import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import styles from './AddBook.module.scss';
import { addBook } from '../../redux/books/books';

const AddBook = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !author) return;
    const newBook = {
      author,
      title,
      item_id: new Date().getMilliseconds().toString(),
      category: 'Category 1',
    };

    dispatch(addBook(newBook));
    setAuthor('');
    setTitle('');
  };

  return (
    <div className={styles['add-book']}>
      <h3 className={styles['add-book__title']}>ADD NEW BOOK</h3>
      <form
        className={styles['add-book__form']}
        onSubmit={handleSubmit}
      >
        <div className={styles['add-book__input-group']}>
          <input
            type="text"
            className={styles['add-book__input']}
            name="title"
            placeholder="Book title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className={styles['add-book__input-group']}>
          <input
            type="text"
            className={styles['add-book__input']}
            name="author"
            placeholder="Book author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>
        <div className={styles['add-book__input-group']}>
          <button
            type="submit"
            className={styles['add-book__btn']}
          >
            Add Book
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBook;

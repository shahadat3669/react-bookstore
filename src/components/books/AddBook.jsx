import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

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
      item_id: uuidv4(),
      category: 'Category 1',
    };

    dispatch(addBook(newBook));
    setAuthor('');
    setTitle('');
  };

  return (
    <>
      <div className={styles['horizontal-divider']} />
      <div className={styles['add-book']}>
        <h3 className={styles['add-book__title']}>ADD NEW BOOK</h3>
        <form
          className={styles['add-book__form']}
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            className={styles['add-book__input-title']}
            name="title"
            placeholder="Book title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <input
            type="text"
            className={styles['add-book__input-author']}
            name="author"
            placeholder="Book author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
          <button
            type="submit"
            className={styles['add-book__btn']}
          >
            ADD BOOK
          </button>
        </form>
      </div>
    </>
  );
};

export default AddBook;

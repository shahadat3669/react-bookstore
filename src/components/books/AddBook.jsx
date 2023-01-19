import React from 'react';

import styles from './AddBook.module.scss';

const AddBook = () => (
  <div className={styles['add-book']}>
    <h3 className={styles['add-book__title']}>ADD NEW BOOK</h3>
    <form className={styles['add-book__form']}>
      <div className={styles['add-book__input-group']}>
        <input
          type="text"
          className={styles['add-book__input']}
          name="title"
          placeholder="Book title"
        />
      </div>
      <div className={styles['add-book__input-group']}>
        <input
          type="text"
          className={styles['add-book__input']}
          name="author"
          placeholder="Book author"
        />
      </div>
      <div className={styles['add-book__input-group']}>
        <button type="submit" className={styles['add-book__btn']}>
          Add Book
        </button>
      </div>
    </form>
  </div>
);

export default AddBook;

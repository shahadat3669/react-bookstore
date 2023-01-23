import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import styles from './Book.module.scss';
import { deleteBook } from '../../redux/books/books';

const Book = ({ book }) => {
  // eslint-disable-next-line
  const { item_id, author, title, category, completed } = book;
  const dispatch = useDispatch();
  const handleRemoveBtnClick = () => {
    dispatch(deleteBook(item_id));
  };
  return (
    <div className={styles.book}>
      <div className={styles.book__left}>
        <div className={styles.book__container}>
          <span className={styles.book__categories}>{category}</span>
          <h3 className={styles.book__title}>{title}</h3>
          <p className={styles.book__author}>{author}</p>
        </div>
        <div className={styles['book__btn-group']}>
          <button
            type="button"
            className={styles.book__btn}
          >
            Comments
          </button>
          <button
            type="button"
            className={styles.book__btn}
            onClick={handleRemoveBtnClick}
          >
            Remove
          </button>
          <button
            type="button"
            className={styles.book__btn}
          >
            Edit
          </button>
        </div>
      </div>
      <div className={styles.book__right}>
        <div className={styles['book__progress-container']}>
          <div className={styles['book__progress-container']}>
            <h4 className={styles['book__progress-title']}>
              {`${completed}%`}
            </h4>
            <p className={styles['book__progress-complete']}>Completed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;

Book.defaultProps = {
  book: null,
};

Book.propTypes = {
  book: PropTypes.instanceOf(Object),
};

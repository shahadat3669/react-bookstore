import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import styles from './Book.module.scss';
import { deleteBook } from '../../redux/books/books';

const Book = ({ book }) => {
  // eslint-disable-next-line
  const { item_id: itemID, author, title, category, completed } = book;
  const dispatch = useDispatch();
  const handleRemoveBtnClick = () => {
    dispatch(deleteBook(itemID));
  };

  const percentage = 66;

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
        <div className={styles['book__progress-wrapper']}>
          <CircularProgressbar
            value={percentage}
            styles={buildStyles({
              pathColor: '#0290ff',
            })}
          />
        </div>
        <div className={styles['book__progress-text-wrapper']}>
          <h4 className={styles['book__progress-title']}>
            {`${completed || 0}%`}
          </h4>
          <p className={styles['book__progress-complete']}>Completed</p>
        </div>
        <div className={styles['book__progress-divider']} />
        <div className={styles['book__chapter-details']}>
          <div className={styles['book__chapter-container']}>
            <span className={styles['book__chapter-name']}>
              Current Chapter
            </span>
            <h4 className={styles['book__chapter-title']}>Chapter 1</h4>
          </div>
          <div className={styles['book__chapter-btn-wrapper']}>
            <button
              type="button"
              className={styles['book__chapter-btn']}
            >
              Update Progress
            </button>
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

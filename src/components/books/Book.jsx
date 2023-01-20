import React from 'react';
import PropTypes from 'prop-types';

import styles from './Book.module.scss';

const Book = ({ book }) => {
  const {
    author, title, category, progress,
  } = book;
  const { currentChapter } = progress;
  return (
    <div className={styles.book}>
      <div className={styles.book__left}>
        <div className={styles.book__container}>
          <span className={styles.book__categories}>{category}</span>
          <h3 className={styles.book__title}>{title}</h3>
          <p className={styles.book__author}>{author}</p>
        </div>
        <div className={styles['book__btn-group']}>
          <button type="button" className={styles.book__btn}>
            Comments
          </button>
          <button type="button" className={styles.book__btn}>
            Remove
          </button>
          <button type="button" className={styles.book__btn}>
            Edit
          </button>
        </div>
      </div>
      <div className={styles.book__right}>
        <div className={styles['book__progress-container']}>
          <div className={styles['book__progress-container']}>
            <h4 className={styles['book__progress-title']}>64%</h4>
            <p className={styles['book__progress-complete']}>Completed</p>
          </div>
        </div>
        <div className={styles['book__chapter-details']}>
          <div className={styles['book__chapter-container']}>
            <span className={styles['book__chapter-name']}>
              Current Chapter
            </span>
            <h4 className={styles['book__chapter-title']}>
              {currentChapter}
            </h4>
          </div>
          <div className={styles['book__chapter-btn-wrapper']}>
            <button type="button" className={styles['book__chapter-btn']}>
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

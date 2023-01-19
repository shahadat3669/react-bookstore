/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';

const Book = (props) => {
  const { author, title, category, progress } = props;
  const { currentChapter } = props.book.progress;
  return (
    <div className="book">
      <div className="book__left">
        <div className="book__text">
          <span className="book__categories">{category}</span>
          <h3 className="book__title">{title}</h3>
          <p className="book__author">{author}</p>
        </div>
        <div className="book__btn-group">
          <button type="button" className="book__btn">
            Comments
          </button>
          <button type="button" className="book__btn">
            Remove
          </button>
          <button type="button" className="book__btn">
            Edit
          </button>
        </div>
      </div>
      <div className="book__right">
        <div className="book__progress-container">
          <div className="book__progress-text">
            <h4 className="book__progress-title">64%</h4>
            <p className="book__progress-complete">Completed</p>
          </div>
        </div>
        <div className="book__chapter-details">
          <div className="book__chapter-text">
            <span className="book__chapter-name">Current Chapter</span>
            <h4 className="book__chapter-title"> {currentChapter}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;

Book.propTypes = {
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { checkStatus } from '../../redux/categories/categories';

const Categories = () => {
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  return (
    <div>
      <div>{categories == null ? '' : categories}</div>
      <button
        type="button"
        onClick={() => dispatch(checkStatus())}
      >
        Check status
      </button>
    </div>
  );
};

export default Categories;

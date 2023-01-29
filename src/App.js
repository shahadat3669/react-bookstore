import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Layout from './components/layout/Layout';
import BookList from './components/books/BookList';
import Categories from './components/categories/Categories';
import NoMatch from './components/layout/NoMatch';

const App = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<BookList />} />
      <Route path="categories" element={<Categories />} />
      <Route path="*" element={<NoMatch />} />
    </Route>
  </Routes>
);

export default App;

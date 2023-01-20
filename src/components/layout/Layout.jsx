import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../header/Header';

const Layout = () => (
  <>
    <Header />
    <main className="container">
      <Outlet />
    </main>
  </>
);

export default Layout;

import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import styles from './Header.module.scss';

const Header = () => (
  <header className={styles.header}>
    <nav className={styles.header__navbar}>
      <div className={styles.header__left}>
        <Link className={styles['header__title-link']} to="/">
          <h1 className={styles.header__title}>Bookstore CMS</h1>
        </Link>

        <ul className={styles['header__nav-items']}>
          <li className={styles['header__nav-item']}>
            <NavLink className={styles['header__nav-link']} to="/">
              Books
            </NavLink>
          </li>
          <li className={styles['header__nav-item']}>
            <NavLink className={styles['header__nav-link']} to="/categories">
              CATEGORIES
            </NavLink>
          </li>
        </ul>
      </div>
      <button type="button" className={styles['header__profile-btn']}>
        <svg
          className={styles['header__profile-svg']}
          width="48"
          height="48"
          viewBox="0 0 48 48"
          xmlns="http://www.w3.org/2000/svg"
          fill="red"
        >
          <path d="M24 24C21.8 24 19.9167 23.2167 18.35 21.65C16.7833 20.0833 16 18.2 16 16C16 13.8 16.7833 11.9167 18.35 10.35C19.9167 8.78333 21.8 8 24 8C26.2 8 28.0833 8.78333 29.65 10.35C31.2167 11.9167 32 13.8 32 16C32 18.2 31.2167 20.0833 29.65 21.65C28.0833 23.2167 26.2 24 24 24ZM8 40V34.4C8 33.2667 8.292 32.2247 8.876 31.274C9.45867 30.3247 10.2333 29.6 11.2 29.1C13.2667 28.0667 15.3667 27.2913 17.5 26.774C19.6333 26.258 21.8 26 24 26C26.2 26 28.3667 26.258 30.5 26.774C32.6333 27.2913 34.7333 28.0667 36.8 29.1C37.7667 29.6 38.5413 30.3247 39.124 31.274C39.708 32.2247 40 33.2667 40 34.4V40H8Z" />
        </svg>
      </button>
    </nav>
  </header>
);

export default Header;

import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logo.svg';
import { FiSearch } from 'react-icons/fi';
import { BsBagFill } from 'react-icons/bs';
import './Header.scss';

const Header = () => (
  <div className='header'>
    <div className="header__container">
      <nav className='header__navigation'>
        <Link to="/">
          <img src={logo} alt="e-Fashionista" />
        </Link>

        <div className="header__items">
          <button type="button" className="header__button">
            <FiSearch size="1.2em" />
          </button>

          <button type="button" className="header__button">
            <BsBagFill size="1.2em" />
            <span className="header__bag-num-items">13</span>
          </button>
        </div>
      </nav>
    </div>
  </div>
);

export default Header;
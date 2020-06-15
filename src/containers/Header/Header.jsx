import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { FiSearch } from 'react-icons/fi';
import { BsBagFill } from 'react-icons/bs';
import { setOverlay } from '../../store/actions';
import logo from '../../logo.svg';
import './Header.scss';

const Header = () => {
  const dispatch = useDispatch();

  const handleSearchClick = () => {
    dispatch(setOverlay('search'));
  }

  const handleCartClick = () => {
    dispatch(setOverlay('cart'));
  }

  return (
    <div className='header'>
      <div className="header__container">
        <nav className='header__navigation'>
          <Link to="/">
            <img src={logo} alt="e-Fashionista" />
          </Link>

          <div className="header__items">
            <button type="button" className="header__button"
              onClick={handleSearchClick}
            >
              <FiSearch size="1.2em" />
            </button>

            <button type="button" className="header__button"
              onClick={handleCartClick}
            >
              <BsBagFill size="1.2em" />
              <span className="header__bag-num-items">13</span>
            </button>
          </div>
        </nav>
      </div>
    </div>
  )
};

export default Header;
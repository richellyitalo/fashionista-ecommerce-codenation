import React from 'react';
import Search from '../Search/Search';
import Cart from '../Cart/Cart';
import './Overlay.scss';


const Overlay = ({ type }) => {
  let Component;
  switch (type) {
    case 'search':
      Component = Search;
      break;
    case 'cart':
      Component = Cart;
      break;
    default:
      Component = null;
  }
  return (
    <div className="overlay">
      {Component && <Component />}
    </div>
  );
};

export default Overlay;
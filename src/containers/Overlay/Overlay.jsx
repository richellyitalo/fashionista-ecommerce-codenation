import React from 'react';
import Search from '../Search/Search';
import './Overlay.scss';


const Overlay = ({ type }) => {
  let Component;
  switch (type) {
    case 'search':
      Component = Search;
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
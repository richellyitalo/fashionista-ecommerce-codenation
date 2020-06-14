import React from 'react';
import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import Routes from '../../routes';

function App () {
  return (
    <div className="app">
      <div className="app__container">
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;

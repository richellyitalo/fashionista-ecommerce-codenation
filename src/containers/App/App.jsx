import React from 'react';
import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import Routes from '../../routes';
import { Header } from '../';

function App () {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />

        <div className="app__container">
          <Routes />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

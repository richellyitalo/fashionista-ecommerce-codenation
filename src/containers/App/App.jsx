import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from '../../routes';
import { Header } from '../';
import './App.scss';

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

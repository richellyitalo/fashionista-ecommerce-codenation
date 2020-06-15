import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import Routes from '../../routes';
import { Header } from '../';
import api from '../../services/api';
import { store, persistor } from '../../store';
import { setProdutos } from '../../store/actions';
import './App.scss';

function App () {
  useEffect(() => {
    const loadProdutos = async () => {
      const res = await api.get('/catalog');
      store.dispatch(setProdutos(res.data));
    };

    loadProdutos();
  }, []);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <div className="app">
          <BrowserRouter>
            <Header />

            <div className="app__container">
              <Routes />
            </div>
          </BrowserRouter>
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;

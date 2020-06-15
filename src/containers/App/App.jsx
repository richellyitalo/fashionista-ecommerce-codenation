import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react'
import { Provider, useSelector } from 'react-redux'
import Overlay from '../Overlay/Overlay';
import Routes from '../../routes';
import { Header } from '../';
import api from '../../services/api';
import { store, persistor } from '../../store';
import { setProdutos } from '../../store/actions';
import './App.scss';

function App () {
  const { app: {overlay} } = useSelector(state => state);

  useEffect(() => {
    const loadProdutos = async () => {
      const res = await api.get('/catalog');
      store.dispatch(setProdutos(res.data));
    };

    loadProdutos();
  }, []);

  return (
    <div className={`app ${overlay!== null ? 'app--overlayed' : ''}`}>
      <BrowserRouter>
        <Header />
        <div className="app__container">
          <Routes />
        </div>
        {overlay && <Overlay type={overlay} />}
      </BrowserRouter>
    </div>
  );
}

const ProviderApp = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
)

export default ProviderApp;

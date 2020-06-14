import React, { useState, useEffect } from 'react';
import api from '../services/api';
import ProdutosList from '../containers/Produtos/ProdutosList';

const HomeRoute = () => {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    const loadProdutos = async () => {
      const res = await api.get('/catalog');
      setProdutos(res.data);
    };

    loadProdutos();
  });

  return produtos.length && <ProdutosList produtos={produtos} />
};

export default HomeRoute;
import React from 'react';
import { useSelector } from 'react-redux';
import ProdutosList from '../containers/Produtos/ProdutosList';

const HomeRoute = () => {
  const { produto: { produtos } } = useSelector(state => state);
  return produtos.length && <ProdutosList produtos={produtos} />
};

export default HomeRoute;
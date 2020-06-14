import React from 'react';
import ProdutoItem from './ProdutoItem';
import './ProdutosList.scss';

const ProdutosList = ({ produtos }) => (
  <div className="produtos-list">
    {produtos.map(produto => <ProdutoItem produto={produto} />)}
  </div>
);

export default ProdutosList;
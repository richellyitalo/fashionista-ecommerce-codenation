import React from 'react';
import ProdutoItem from './ProdutoItem';
import './ProdutosList.scss';

const ProdutosList = ({ produtos }) => (
  <div className="produtos-list__container">
    <div className="produtos-list__info">{produtos.length} produtos</div>
    <div className="produtos-list">
      {produtos.map(produto => <ProdutoItem key={produto.code_color} produto={produto} />)}
    </div>
  </div>
);

export default ProdutosList;
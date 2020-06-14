import React from 'react';
import { Link } from 'react-router-dom';
import './ProdutoItem.scss';
import { slugify } from '../../util/helpers';

const ProdutoItemList = ({ produto }) => (
  <div className="produto-item">
    <Link to={slugify(produto.name)} className="produto-item__image">
      <img src={produto.image} alt={produto.name} />
      {produto.on_sale && <span className="produto-item__percent-discount">-{produto.discount_percentage}</span>}
    </Link>

    <div className="produto-item__footer">
      <div className="produto-item__title">
        {produto.name}
      </div>

      <div className="produto-item__price">
        <span className="produto-item__price--dashed">{produto.regular_price}</span>
        <strong className="produto-item__price-discount">{produto.actual_price}</strong>
      </div>

    </div>
  </div>
);


export default ProdutoItemList;
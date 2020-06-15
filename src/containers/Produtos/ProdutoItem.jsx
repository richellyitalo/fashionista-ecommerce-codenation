import React from 'react';
import { Link } from 'react-router-dom';
import { slugify } from '../../util/helpers';
import noImage from '../../produto-noimage.png';
import './ProdutoItem.scss';
import { Img } from '../../components';


const ProdutoItemList = ({ produto }) => (
  <Link to={`produto/${slugify(produto.name)}`} className="produto-item">
    <div className="produto-item__image">
      <Img src={produto.image ? produto.image : noImage} alt={produto.name} />

      {produto.on_sale && <span className="produto-item__percent-discount">-{produto.discount_percentage}</span>}
    </div>

    <div className="produto-item__footer">
      <div className="produto-item__title">
        {produto.name}
      </div>

      <div className="produto-item__price">
        {produto.on_sale ?
          (
            <>
              <span className="produto-item__price--dashed">
                {produto.regular_price}
              </span>
              <strong>{produto.actual_price}</strong>
            </>
          ) :
          <strong className="produto-item__price">
            {produto.regular_price}
          </strong>
        }
      </div>

    </div>
  </Link>
);


export default ProdutoItemList;
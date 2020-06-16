import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart, decreateItemCart, removeItem } from '../../store/actions';
import './Produto.scss';
import { slugify } from '../../util/helpers';
import { Img } from '../../components';

const Produto = ({ produto }) => {
  const url = '/produto/' + slugify(produto.name) + '_' + produto.code_color;
  const dispatch = useDispatch();
  const size = produto.sizes.find(size => size.sku === produto.sizeSelected);

  const handleAddToCart = (produtoCart, sizeSelected) => {
    dispatch(addToCart(produtoCart, sizeSelected));
  }

  const handleDecreateItem = (produtoCart) => {
    dispatch(decreateItemCart(produtoCart));
  }

  const handleRemoveItem = (produtoCart) => {
    dispatch(removeItem(produtoCart));
  }

  return (
    <div className="produto">
      <Link to={url} className="produto__image">
        <Img src={produto.image} alt={produto.name} />
      </Link>
      <div className="produto__info">
        <strong>{produto.name}</strong>

        <div className="produto__size">
          Tam.: {size.size}
        </div>

        <div className="produto__quantity-handle">
          <button
            className="produto__button-quantity"
            onClick={() => handleDecreateItem(produto, produto.sizeSelected)}>
            -
          </button>
          <span className="produto__quantity-value">{produto.quantity}</span>
          <button
            className="produto__button-quantity"
            onClick={() => handleAddToCart(produto, produto.sizeSelected)}>
            +
          </button>
        </div>
        <button className="produto__remove-item"
          onClick={() => handleRemoveItem(produto)}
        >
          Remover item
        </button>
      </div>
      <div className="produto__price">
        <strong>{produto.actual_price}</strong>
        <br />
        <small className="produto__installments">{produto.installments}</small>
      </div>
    </div>
  )
}

export default Produto;
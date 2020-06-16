import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { OverlayHeader } from '../../components'
import Produto from './Produto';
import './Cart.scss';

const Cart = () => {
  const { produtos, total } = useSelector(state => state.cart);

  const valorTotal = produtos.reduce((acc, produto) => {
    const floatPrice = parseFloat(produto.actual_price.replace('R$ ', '').replace(',', '.'));
    return acc += (floatPrice * produto.quantity);
  }, 0.00).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  return (
    <div className="cart">
      <OverlayHeader title={`Sacola (${total})`} />

      <div className="cart__content">
        <div className="cart__items">
          {produtos.length === 0 && (<h3 className="search__not-found-text">Nenhum produto adicionado à sacola</h3>)}
          {produtos.length > 0 && produtos.map(
            produto => (<Produto key={produto.sizeSelected} produto={produto} />))}
        </div>

        {produtos.length > 0 && (<div className="cart__total">
          Subtotal: <strong>{valorTotal}</strong>
        </div>)}

      </div>
    </div>
  );
}

export default Cart;
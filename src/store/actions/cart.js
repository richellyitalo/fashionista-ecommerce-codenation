import * as types from '../types';

export const addToCart = (produto, code_size) => ({
  type: types.CART_ADD_PRODUTO,
  payload: {
    produto,
    code_size,
  },
});

export const clearCart = (slug) => ({
  type: types.CART_CLEAR,
});

export const decreateItemCart = (produtoCart) => ({
  type: types.CART_DECREASE_PRODUTO,
  payload: produtoCart,
});

export const removeItem = (produtoCart) => ({
  type: types.CART_REMOVE_ITEM,
  payload: produtoCart,
});

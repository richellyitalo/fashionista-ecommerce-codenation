import * as types from '../types';

export const setProdutos = (produtos) => ({
  type: types.PRODUTO_SET_PRODUTOS,
  payload: produtos,
});

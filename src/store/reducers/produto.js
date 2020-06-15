import { PRODUTO_SET_PRODUTOS, PRODUTO_SET_DETAIL } from '../types';

const INITIAL_STATE = {
  produtos: [],
  produtoDetail: {},
};

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case PRODUTO_SET_PRODUTOS:
      return { ...state, produtos: payload };
    case PRODUTO_SET_DETAIL:
      return { ...state, produtoDetail: payload };
    default:
      return state;
  }
};

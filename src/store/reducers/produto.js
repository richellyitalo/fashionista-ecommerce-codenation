import { PRODUTO_SET_PRODUTOS, PRODUTO_SET_DETAIL } from '../types';
import { slugify } from '../../util/helpers';

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
      const produto = state.produtos.filter(
        (produto) =>
          `${slugify(produto.name)}_${produto.code_color}` === payload
      );
      return { ...state, produtoDetail: produto[0] };
    default:
      return state;
  }
};

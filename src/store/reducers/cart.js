import {
  CART_ADD_PRODUTO,
  CART_CLEAR,
  CART_DECREASE_PRODUTO,
  CART_REMOVE_ITEM,
} from '../types';

const INITIAL_STATE = {
  produtos: [], // quantity //sizeSelected
  total: 0,
};

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ADD_PRODUTO:
      const { produto, code_size } = payload;
      let produtos = [];

      const produtoInCartIndex = state.produtos.findIndex(
        (produtoCart) =>
          produtoCart.code_color === produto.code_color &&
          produtoCart.sizeSelected === code_size
      );

      if (produtoInCartIndex >= 0) {
        let produtoTemp = state.produtos[produtoInCartIndex];
        produtoTemp.quantity++;
        let stateProdutos = state.produtos;
        stateProdutos.splice(produtoInCartIndex, 1, produtoTemp);
        produtos = stateProdutos;
      } else {
        produtos = state.produtos;
        produtos.push({ ...produto, sizeSelected: code_size, quantity: 1 });
      }

      const total = produtos.reduce(
        (accumulator, { quantity }) => accumulator + quantity,
        0
      );

      return { ...state, produtos: produtos, total };

    case CART_DECREASE_PRODUTO:
      let produtos2 = state.produtos;

      const produtoInCart = state.produtos.findIndex(
        (produtoCart) => produtoCart.sizeSelected === payload.sizeSelected
      );
      if (produtoInCart >= 0) {
        let produtoTemp = state.produtos[produtoInCart];
        if (produtoTemp.quantity > 1) {
          produtoTemp.quantity--;
        }
        let stateProdutos = state.produtos;
        stateProdutos.splice(produtoInCart, 1, produtoTemp);
        produtos2 = stateProdutos;
      }

      const totalProdutos = produtos2.reduce(
        (accumulator, { quantity }) => accumulator + quantity,
        0
      );

      return { ...state, produtos: produtos2, total: totalProdutos };

    case CART_REMOVE_ITEM:
      const index = state.produtos.findIndex(
        (produtoCart) => produtoCart.sizeSelected === payload.sizeSelected
      );
      let produtosStateTemp = state.produtos;
      produtosStateTemp.splice(index, 1);

      return {
        ...state,
        produtos: produtosStateTemp,
        total: produtosStateTemp.reduce(
          (accumulator, { quantity }) => accumulator + quantity,
          0
        ),
      };

    case CART_CLEAR:
      return { ...state, ...INITIAL_STATE };

    default:
      return state;
  }
};

import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { OverlayHeader } from '../../components'
import Produto from './Produto';
import './Search.scss';

const Search = () => {
  const [produtosFound, setProdutosFound] = useState([]);
  const { produtos } = useSelector(state => state.produto);

  const onInputChange = (event) => {
    const term = event.target.value.trim();

    searchProdutos(term.trim());
  };

  const searchProdutos = term => {
    console.log(term.length);
    if (term.length < 3) {
      setProdutosFound([]);
      return;
    }

    setProdutosFound(produtos.filter(produto => produto.name.toLowerCase().indexOf(term.toLowerCase())))
  }

  return (
    <div className="search">
      <OverlayHeader title='Busca por produtos' />

      <div className="search__content">
        <input type="text" className="search__input" onKeyUp={onInputChange} />

        <div className="search__results">
          {produtosFound.length === 0 && (<h3 className="search__not-found-text">Nenhum produto encontrado</h3>)}
          {produtosFound && produtosFound.map(
            produto => (<Produto key={produto.code_color} produto={produto} />))}
        </div>
      </div>
    </div>
  );
}

export default Search;
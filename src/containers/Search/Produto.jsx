import React from 'react';
import { Link } from 'react-router-dom';
import './Produto.scss';
import { slugify } from '../../util/helpers';
import { Img } from '../../components';

const Produto = ({produto}) => {
  const url = '/produto/' + slugify(produto.name) + '_' + produto.code_color;

  return (
    <Link to={url} className="produto">
      <div className="produto__image">
        <Img src={produto.image} alt={produto.name} />
      </div>
      <div className="produto__info">
        <strong>{produto.name}</strong>
      </div>
      <div className="produto__price">
        <strong>{produto.actual_price}</strong>
        <br/>
        <small className="produto__installments">{produto.installments}</small>
      </div>
    </Link>
  )
}

export default Produto;
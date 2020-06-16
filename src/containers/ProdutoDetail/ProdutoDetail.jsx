import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/actions';
import { Img } from '../../components';
import './ProdutoDetail.scss';

const ProdutoDetail = ({ produto }) => {
  const [sizeSelected, setSizeSelected] = useState(null);
  const [error, setError] = useState('');
  const sizesAvailable = produto.sizes.filter(size => !!size.available);
  const dispatch = useDispatch();

  const handleSetsize = (size) => {
    setSizeSelected(size);
  }

  const handleAddToCart = () => {
    if (!sizeSelected) {
      setError('É necessário selecionar um tamanho');
      return;
    }

    dispatch(addToCart(produto, sizeSelected));
  }

  return (
    <div className="produto-detail__grid">
      <div className="produto-detail__image">
        <Img src={produto.image} alt={produto.name} />
      </div>

      <div className="produto-detail__meta">
        <h1 className="produto-detail__name">
          {produto.name}
        </h1>

        <div className="produto-detail__price">
          {produto.on_sale ?
            (
              <>
                <span className="produto-detail__price--dashed">
                  {produto.regular_price}
                </span>
                <strong>{produto.actual_price}</strong>
              </>
            ) :
            <strong className="produto-detail__price">
              {produto.regular_price}
            </strong>
          }
          <strong className="produto-detail__installments">
            em até {produto.installments}
          </strong>
        </div>

        <div className="produto-detail__cart-actions">
          {error && <div className="produto-detail__error">{error}</div>}

          <div className="produto-detail__sizes">
            {sizesAvailable.map(({ size, sku }) => (
              <span
                key={size}
                onClick={() => handleSetsize(sku)}
                className={`produto-detail__input-size${sku === sizeSelected ? '--active' : ''}`}>
                {size}
              </span>
            ))}
          </div>

          <div>
            <button className="produto-detail__add-to-cart"
              onClick={() => handleAddToCart()}
            >
              Adicionar à Sacola
            </button>
          </div>

        </div>
      </div>

    </div>
  )
};

export default ProdutoDetail;
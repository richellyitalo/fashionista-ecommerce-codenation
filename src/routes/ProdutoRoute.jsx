import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { clearOverlay } from '../store/actions';
import { isEmpty } from '../util/helpers';
import { setProdutoDetail } from '../store/actions'
import { ProdutoDetail } from '../containers';

const ProdutoRoute = () => {
  const dispatch = useDispatch();
  const { slug } = useParams();
  const { produto: { produtoDetail } } = useSelector(state => state);

  useEffect(() => {
    dispatch(setProdutoDetail(slug));
    dispatch(clearOverlay());
  }, [dispatch, slug]);
  return !isEmpty(produtoDetail) && <ProdutoDetail produto={produtoDetail}/>
};

export default ProdutoRoute;
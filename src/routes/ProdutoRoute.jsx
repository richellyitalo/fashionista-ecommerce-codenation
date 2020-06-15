import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setProdutoDetail } from '../store/actions'
import { ProdutoDetail } from '../containers';

const ProdutoRoute = () => {
  const dispatch = useDispatch();
  const { slug } = useParams();
  const { produto: { produtoDetail } } = useSelector(state => state);

  useEffect(() => {
    dispatch(setProdutoDetail(slug))
  }, [dispatch, slug]);
  return produtoDetail && <ProdutoDetail produto={produtoDetail}/>
};

export default ProdutoRoute;
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ProdutoDetail } from '../containers';
import { slugify } from '../util/helpers';
import api from '../services/api';

const ProdutoRoute = () => {
  const { slug } = useParams();
  const [produto, setProduto] = useState(null);

  useEffect(() => {
    const loadProduto = async () =>  {
      const res = await api.get('/catalog');
      const produto = res.data.find(produto => slugify(produto.name) === slug)
      if (!produto) {
        alert('Produto inexistente!');
        return;
      }

      setProduto(produto);
    };

    loadProduto();
  }, [slug]);
  return produto && <ProdutoDetail produto={produto}/>
};

export default ProdutoRoute;
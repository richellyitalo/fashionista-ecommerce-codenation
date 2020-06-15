import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomeRoute from './HomeRoute';
import ProdutoRoute from './ProdutoRoute';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={HomeRoute} />

    <Route exact path="/produto/:slug" children={<ProdutoRoute />} />
  </Switch>
);

export default Routes;
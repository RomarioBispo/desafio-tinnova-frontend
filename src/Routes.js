import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AdicionarVeiculos from './Pages/AdicionarVeiculos';
import ListarVeiculos from './Pages/ListarVeiculos';
import EditarVeiculos from './Pages/EditarVeiculos';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={ListarVeiculos} />
        <Route path="/adicionar" exact component={AdicionarVeiculos} />
        <Route path="/editar" exact component={EditarVeiculos} />
      </Switch>
    </BrowserRouter>
  );
}

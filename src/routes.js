import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from './pages/Cart';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
    </Switch>
  );
}

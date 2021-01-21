import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from 'pages/main';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={Main} />
  </Switch>
);

export default Routes;

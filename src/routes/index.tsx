import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from 'pages/main';
import Table from 'components/table';
import Songs from 'pages/reports/Songs';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={Main} />
    <Route exact path="/table" component={Table} />
    <Route exact path="/Songs" component={Songs} />
  </Switch>
);

export default Routes;


import React, { useContext } from 'react';
import { Redirect, Route, Switch, useLocation } from 'react-router-dom';
import Dashboard from 'pages/App';

const Routes: React.FC = () => (
  <>
    <Switch>
      <Route exact path="/" component={Dashboard} />
    </Switch>
  </>
);

export default Routes;

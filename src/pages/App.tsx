import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyles from 'assets/css/global';
import Routes from 'routes';
import Theme from 'components/theme';

const App: React.FC = () => (
  <BrowserRouter>
    <Theme>
      <GlobalStyles />
      <Routes />
    </Theme>
  </BrowserRouter>
);

export default App;

import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyles from 'assets/css/global';
import Routes from 'routes';
import Theme from 'components/theme';
import Header from 'pages/header';

const App: React.FC = () => (
  <BrowserRouter>
    <Theme>
      <GlobalStyles />
      <Header />
      <Routes />
    </Theme>
  </BrowserRouter>
);

export default App;

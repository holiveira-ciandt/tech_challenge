import React from 'react';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from 'themes';

const Theme: React.FC = ({ children }) => (
  <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>
);

export default Theme;

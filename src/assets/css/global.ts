import { createGlobalStyle } from 'styled-components';

interface fontSizes {
  small: string;
  medium: string;
  large: string;
  smaller: string;
}

interface colors {
  powderWhite: string;
  persianGreen: string;
  lightBlue: string;
  onyx: string;
}

interface Props {
  theme: {
    fontSizes: fontSizes;
    colors: colors;
  };
}

const GlobalStyle = createGlobalStyle<Props>`
  body {
   margin:0;
    padding: 0;
    display: flex;
  }
  th {
  padding: 10px;
  text-align: center;
  background-color: ${props => props.theme.colors.persianGreen};
  color: white;
  font-size: ${props => props.theme.fontSizes.small};
  }
  td {
    font-size: ${props => props.theme.fontSizes.smaller};
  }
  td,th {
  padding: 12px;
  }
  tr:hover {
  background-color: #ddd;
  }
`;

export default GlobalStyle;

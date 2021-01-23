import styled from 'styled-components';

interface Props {
  width?: number;
  height?: number;
}

export const TableContainer = styled.table<Props>`
  font-size: 20px;
  table-layout: auto;
`;

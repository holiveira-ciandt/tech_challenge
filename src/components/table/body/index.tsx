import React from 'react';
import { PropsTableData } from 'types/tables';
// import { PropsTableData } from 'types/tables';

// import { Container } from './styles';

const trRender = (bodyElements: string[]) => (
  <tr>{bodyElements.map(item => tdRender(item))}</tr>
);

const tdRender = (item: string) => <td>{item}</td>;

const Body: React.FC<PropsTableData> = ({ data }) => (
  <>{data && trRender(data)}</>
);

export default Body;

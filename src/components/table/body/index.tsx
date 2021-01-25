import React from 'react';
import { PropsTableData } from 'types/tables';

const trRender = (bodyElements: string[]) => (
  <tr>{bodyElements.map((item, idx) => Cell(item, idx))}</tr>
);

const Cell = (item: string, idx: number) => (
  <td key={`${item}-${idx}`}>{item}</td>
);

const Body: React.FC<PropsTableData> = ({ data }) => (
  <>{data && trRender(data)}</>
);

export default Body;

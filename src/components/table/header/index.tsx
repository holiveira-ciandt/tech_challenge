import React from 'react';
import { PropsTableData } from 'types/tables';

const thRender = (key: string) => <th key={key}>{key.toUpperCase()}</th>;

const Header: React.FC<PropsTableData> = ({ data }) => (
  <>{data && data.map((key: string) => thRender(key))}</>
);

export default Header;

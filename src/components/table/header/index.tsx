import { ConfigSort } from 'hooks/useSortableData';
import React from 'react';
import { NormalizeData, PropsHeader, SortableFunction } from 'types/tables';

interface Props extends PropsHeader {
  sortConfig?: ConfigSort | null;
}

const thRender = (
  value: NormalizeData,
  onChange: SortableFunction | null,
  direction = 'ascending',
) => (
  <th key={value.key} onClick={() => (onChange ? onChange(value.key) : null)}>
    {value.name}
    {value.isSortable && direction === 'ascending'
      ? arrowUp()
      : value.isSortable && arrowDown()}
  </th>
);

const arrowUp = () => <span>&#8593;</span>;

const arrowDown = () => <span>&#8595;</span>;

const Header: React.FC<Props> = ({ data, onChange, sortConfig }) => (
  <>
    <tr>
      {data &&
        data.map((item: NormalizeData) =>
          thRender(item, onChange || null, sortConfig?.direction),
        )}
    </tr>
  </>
);

export default Header;

/* eslint-disable no-shadow */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import TbHeader from 'components/table/header';
import TbBody from 'components/table/body';
import { Songs } from 'types/songs';
import useWindows from 'hooks/useWindowSize';
import useSortableData from 'hooks/useSortableData';
import { NormalizeData } from 'types/tables';
import { TableContainer } from './styles';

interface TableData {
  values?: Songs[];
  headers?: NormalizeData[];
  normalizeBodyResponse?: string[] | number[];
}

export const Table: React.FC<TableData> = ({ values, headers }) => {
  const { width } = useWindows();
  const [dataSet, setDataSet] = useState<any>([]);
  const { items, requestSort, sortConfig } = useSortableData(values, null);

  useEffect(() => {
    if (values?.length) {
      setDataSet(values);
    }
  }, [values]);

  useEffect(() => {
    setDataSet(items);
  }, [items]);

  const getBody = (): string[] => dataSet.map((d: any) => Object.values(d));

  return (
    <TableContainer width={width}>
      <thead>
        {dataSet.length && (
          <TbHeader
            sortConfig={sortConfig}
            onChange={(key: string) => requestSort(key)}
            data={headers}
          />
        )}
      </thead>
      <tbody>
        {dataSet?.length &&
          getBody().map((item: any) => <TbBody data={item} />)}
      </tbody>
    </TableContainer>
  );
};

export default Table;

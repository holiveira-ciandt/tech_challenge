/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { useMemo, useState } from 'react';

export interface ConfigSort {
  key?: string;
  direction?: string;
}

const useSortableData = (items: any, config: ConfigSort | null) => {
  const [sortConfig, setSortConfig] = useState(config);

  const sortedItems = useMemo(() => {
    const sortableItems = [...items];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (
          a[sortConfig.key as keyof ConfigSort] <
          b[sortConfig.key as keyof ConfigSort]
        ) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (
          a[sortConfig.key as keyof ConfigSort] >
          b[sortConfig.key as keyof ConfigSort]
        ) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [items, sortConfig]);

  const requestSort = (key: string) => {
    let direction = 'ascending';
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === 'ascending'
    ) {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  return { items: sortedItems, requestSort, sortConfig };
};

export default useSortableData;

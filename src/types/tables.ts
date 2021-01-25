/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
export type SortableFunction = (name: string) => void;

export interface PropsTableData {
  data?: string[];
}

export interface PropsHeader {
  data?: NormalizeData[];
  onChange?: SortableFunction;
}

export interface NormalizeData {
  name: string;
  key: string;
  isSortable?: boolean;
  value?: string | number;
}

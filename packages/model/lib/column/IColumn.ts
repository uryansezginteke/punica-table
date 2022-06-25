import { ColumnType } from '..';

export interface IColumn {
  label: string | (() => string);
  id?: string;
  attribute?: string;
  class?: string;
  sortable?: boolean;
  width?: { value: number; unit: 'px' | '%' };
  type?: ColumnType;

  [propName: string]: any;
}

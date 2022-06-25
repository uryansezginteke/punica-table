import { IEntity } from '@punica/common';
import {
  ITableAction,
  TypeColumn,
  TypeRowStyle,
  ISearch,
  IPagination,
  IFilter,
  ISort,
  TypeRender
} from '..';

export interface ITable<E extends IEntity> {
  title?: string | (() => string);
  searchInput?: string;
  columns?: Array<TypeColumn>;
  search?: ISearch<E>;
  filter?: IFilter;
  sorts?: ISort;
  pagination?: IPagination;
  tableAction?: ITableAction;
  render?: TypeRender;
  rowStyle?: TypeRowStyle;
}

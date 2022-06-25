import { IAction } from '@punica/common';
import { IColumn } from '.';

export interface IColumnCustomAction extends IAction {
  render?: (data: unknown) => any;
}

export interface IColumnAction extends IColumn {
  actions: Array<IColumnCustomAction>;
  displayType?: 'button' | 'menu';
}

import { IAction } from '@punica/common';

export interface ITableCustomAction extends IAction {
  render?: (data: unknown) => any;
}

export interface ITableAction {
  label: string;
  actions: Array<ITableCustomAction>;
}

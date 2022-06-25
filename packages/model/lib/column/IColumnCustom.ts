import { IColumn } from '.';

export interface IColumnCustom extends IColumn {
  render: (entity: any) => unknown;
}

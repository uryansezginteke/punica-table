import { IClassDecorator } from '@punica/common';
import { ITableAction } from '..';

export const DECORATOR_TABLE_ACTION = 'class:table-action';

export const TableAction: IClassDecorator<ITableAction> = (
  tableAction: ITableAction
): ClassDecorator => {
  return (target) => {
    Reflect.defineMetadata(
      DECORATOR_TABLE_ACTION,
      tableAction,
      target.prototype
    );

    return target;
  };
};

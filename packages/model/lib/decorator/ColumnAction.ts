import { IClassDecorator } from '@punica/common';
import { IColumnAction, ColumnType } from '..';

export const DECORATOR_COLUMN_ACTION = 'class:table-column-action';

export const ColumnAction: IClassDecorator<IColumnAction> = (
  columnAction: IColumnAction
): ClassDecorator => {
  return (target) => {
    Reflect.defineMetadata(
      DECORATOR_COLUMN_ACTION,
      columnAction,
      target.prototype
    );

    columnAction.type = ColumnType.Action;

    return target;
  };
};

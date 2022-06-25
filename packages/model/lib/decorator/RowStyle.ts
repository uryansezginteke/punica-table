import { IClassDecorator } from '@punica/common';
import { TypeRowStyle } from '..';

export const DECORATOR_ROW_STYLE = 'class:table-row-style';

export const RowStyle: IClassDecorator<TypeRowStyle> = (
  rowStyle: TypeRowStyle
): ClassDecorator => {
  return (target) => {
    Reflect.defineMetadata(DECORATOR_ROW_STYLE, rowStyle, target.prototype);

    return target;
  };
};

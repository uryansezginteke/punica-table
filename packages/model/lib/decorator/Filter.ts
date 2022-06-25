import { IClassDecorator } from '@punica/common';
import { IFilter } from '..';

export const DECORATOR_FILTER = 'class:table-filter';

export const Filter: IClassDecorator<IFilter> = (
  filter: IFilter
): ClassDecorator => {
  return (target) => {
    Reflect.defineMetadata(DECORATOR_FILTER, filter, target.prototype);

    return target;
  };
};

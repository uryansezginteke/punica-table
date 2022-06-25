import { IClassDecorator } from '@punica/common';
import { ISort } from '..';

export const DECORATOR_SORT = 'class:table-sort';

export const Sort: IClassDecorator<ISort> = (sort: ISort): ClassDecorator => {
  return (target) => {
    Reflect.defineMetadata(DECORATOR_SORT, sort, target.prototype);

    return target;
  };
};

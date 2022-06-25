import { IClassDecorator } from '@punica/common';
import { IPagination } from '..';

export const DECORATOR_PAGINATION = 'class:table-pagination';

export const Pagination: IClassDecorator<IPagination> = (
  pagination: IPagination
): ClassDecorator => {
  return (target) => {
    Reflect.defineMetadata(DECORATOR_PAGINATION, pagination, target.prototype);

    return target;
  };
};

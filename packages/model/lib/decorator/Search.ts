import { IClassDecorator } from '@punica/common';
import { ISearch } from '..';

export const DECORATOR_SEARCH = 'class:table-search';

export const Search: IClassDecorator<ISearch<any>> = (
  tableSearch: ISearch<any>
): ClassDecorator => {
  return (target) => {
    Reflect.defineMetadata(DECORATOR_SEARCH, tableSearch, target.prototype);

    return target;
  };
};

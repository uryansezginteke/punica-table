import { IClassDecorator } from '@punica/common';

export const DECORATOR_SEARCH_INPUT = 'class:table-search-input';

export const SearchInput: IClassDecorator<string> = (
  searchInput: string
): ClassDecorator => {
  return (target) => {
    Reflect.defineMetadata(
      DECORATOR_SEARCH_INPUT,
      searchInput,
      target.prototype
    );

    return target;
  };
};

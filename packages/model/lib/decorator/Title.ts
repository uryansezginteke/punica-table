import { IClassDecorator } from '@punica/common';

export const DECORATOR_TITLE = 'class:table-title';

export const Title: IClassDecorator<string> = (
  title: string
): ClassDecorator => {
  return (target) => {
    Reflect.defineMetadata(DECORATOR_TITLE, title, target.prototype);

    return target;
  };
};

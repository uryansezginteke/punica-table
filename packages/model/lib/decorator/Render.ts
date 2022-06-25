import { IClassDecorator } from '@punica/common';
import { TypeRender } from '..';

export const DECORATOR_RENDER = 'class:table-render';

export const Render: IClassDecorator<TypeRender> = (
  render: TypeRender
): ClassDecorator => {
  return (target) => {
    Reflect.defineMetadata(DECORATOR_RENDER, render, target.prototype);

    return target;
  };
};

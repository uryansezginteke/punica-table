import { IColumn, ColumnType } from '..';
import { IPropertyDecorator } from '@punica/common';

export const DECORATOR_COLUMN = 'property:column';

export const Column: IPropertyDecorator<IColumn> = (data: IColumn) => {
  return (target: any, propertyKey: string) => {
    const allMetadata = Reflect.getMetadata(DECORATOR_COLUMN, target) || {};

    allMetadata[propertyKey] = allMetadata[propertyKey] || {};

    data.attribute = propertyKey;
    data.type = ColumnType.Normal;

    for (const key of Reflect.ownKeys(data)) {
      allMetadata[propertyKey][key] = data[key.toString()];
    }

    Reflect.defineMetadata(DECORATOR_COLUMN, allMetadata, target);
  };
};

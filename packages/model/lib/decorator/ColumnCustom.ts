import { IPropertyDecorator } from '@punica/common';
import { ColumnType, IColumnCustom } from '..';

export const DECORATOR_COLUMN_CUSTOM = 'property:column-custom';

export const ColumnCustom: IPropertyDecorator<IColumnCustom> = (
  data: IColumnCustom
) => {
  return (target: any, propertyKey: string) => {
    const allMetadata =
      Reflect.getMetadata(DECORATOR_COLUMN_CUSTOM, target) || {};

    allMetadata[propertyKey] = allMetadata[propertyKey] || {};

    data.attribute = propertyKey;
    data.type = ColumnType.Custom;

    for (const key of Reflect.ownKeys(data)) {
      allMetadata[propertyKey][key] = data[key.toString()];
    }

    Reflect.defineMetadata(DECORATOR_COLUMN_CUSTOM, allMetadata, target);
  };
};

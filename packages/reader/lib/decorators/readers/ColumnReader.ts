import { IEntity } from '@punica/common';
import BaseReader from '../base';
import {
  ITable,
  TypeColumn,
  DECORATOR_COLUMN,
  DECORATOR_COLUMN_CUSTOM,
  DECORATOR_COLUMN_ACTION
} from '@punica/table-model';

/**
 *
 */
class Reader<E extends IEntity> extends BaseReader<E> {
  /**
   *
   * @param schema
   * @returns
   */
  private readColumn = async (schema: E): Promise<Array<TypeColumn>> => {
    const columns: Array<TypeColumn> = new Array<TypeColumn>();
    const attributeColumn = Reflect.getMetadata(DECORATOR_COLUMN, schema);
    const attributeColumnCustom = Reflect.getMetadata(
      DECORATOR_COLUMN_CUSTOM,
      schema
    );
    const attributeColumnAction = Reflect.getMetadata(
      DECORATOR_COLUMN_ACTION,
      schema
    );
    const keys = Object.keys(schema);

    await keys.forEach((key: string) => {
      if (!Reflect.has(schema, key)) {
        return;
      }

      let metadata = null;
      if (attributeColumn && attributeColumn[key]) {
        metadata = attributeColumn[key];
      } else if (attributeColumnCustom && attributeColumnCustom[key]) {
        metadata = attributeColumnCustom[key];
      }

      if (metadata) {
        columns.push(metadata);
      }
    });

    if (attributeColumnAction) {
      if (attributeColumnAction.displayType == null) {
        attributeColumnAction.displayType = 'menu';
      }

      columns.push(attributeColumnAction);
    }

    return columns;
  };

  /**
   *
   * @param entity
   * @returns
   */
  public async read(entity: E): Promise<ITable<E>> {
    return new Promise(async (resolve, reject) => {
      if (!entity) {
        reject();
      }

      const table: ITable<E> = await super.read(entity);

      table.columns = await this.readColumn(entity);

      resolve(table);
    });
  }
}

export default Reader;

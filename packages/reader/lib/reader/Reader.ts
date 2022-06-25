import { IEntity } from '@punica/common';
import {
  ITable,
  IReader,
  DECORATOR_TITLE,
  DECORATOR_TABLE_ACTION,
  DECORATOR_PAGINATION,
  DECORATOR_SEARCH,
  DECORATOR_ROW_STYLE,
  DECORATOR_SEARCH_INPUT,
  DECORATOR_RENDER,
  DECORATOR_FILTER,
  DECORATOR_SORT
} from '@punica/table-model';

class Reader<E extends IEntity> implements IReader<E> {
  /**
   *
   * @param schema
   * @returns
   */
  public read = (schema: E): Promise<ITable<E>> => {
    return new Promise<ITable<E>>(async (resolve, reject) => {
      if (!schema) {
        reject();
      }

      const table: ITable<any> = {};

      table.title = Reflect.getMetadata(DECORATOR_TITLE, schema);
      table.pagination = Reflect.getMetadata(DECORATOR_PAGINATION, schema);
      table.tableAction = Reflect.getMetadata(DECORATOR_TABLE_ACTION, schema);
      table.search = Reflect.getMetadata(DECORATOR_SEARCH, schema);
      table.searchInput = Reflect.getMetadata(DECORATOR_SEARCH_INPUT, schema);
      table.filter = Reflect.getMetadata(DECORATOR_FILTER, schema);
      table.sorts = Reflect.getMetadata(DECORATOR_SORT, schema);
      table.rowStyle = Reflect.getMetadata(DECORATOR_ROW_STYLE, schema);
      table.render = Reflect.getMetadata(DECORATOR_RENDER, schema);

      resolve(table);
    });
  };
}

export default Reader;

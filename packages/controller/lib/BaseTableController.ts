import { IEntity } from '@punica/common';
import { BaseListener } from '@punica/common';
import { IData, ITable, IReader } from '@punica/table-model';

abstract class BaseTableController<E extends IEntity> extends BaseListener {
  protected _table: ITable<E>;
  protected _scheme: E;
  protected _data: IData<E>;

  /**
   *
   * @param scheme
   */
  constructor(scheme: E) {
    super();

    this._scheme = scheme;
  }

  /**
   *
   */
  public get table(): ITable<E> {
    return this._table;
  }

  /**
   *
   */
  public get data(): IData<E> {
    return this._data;
  }

  /**
   *
   * @param filter
   */
  public setFilter = (filter: any) => {
    if (this._table.filter) {
      this._table.filter.data = { ...this._table.filter.data, ...filter };
    }
  };

  /**
   *
   * @param reader
   */
  public read = (reader: IReader<E>): Promise<ITable<E>> => {
    return new Promise(async (resolve) => {
      this._table = await reader.read(this._scheme);

      resolve(this._table);
    });
  };

  /**
   *
   * @param page
   */
  public setPage = (page: number) => {
    if (this._table.pagination) {
      this._table.pagination.page = page;
    }
  };

  /**
   *
   * @param size
   */
  public setPageSize = (size: number) => {
    if (this._table.pagination) {
      this._table.pagination.pageSize = size;
    }
  };

  /**
   *
   * @param sort
   */
  public setSorts = (sort: string) => {
    if (this._table.sorts) {
      this._table.sorts.data = sort;
    }
  };

  abstract send: () => Promise<IData<E>>;
}

export default BaseTableController;

import { IEntity } from '@punica/common';
import { ITable, IReader } from '@punica/table-model';

abstract class BaseReader<E extends IEntity> implements IReader<E> {
  private _table: ITable<E>;
  protected reader: IReader<E>;

  /**
   *
   * @param reader
   */
  constructor(reader: IReader<E>) {
    this.reader = reader;
  }

  /**
   *
   * @param entity
   * @returns
   */
  public async read(entity: E): Promise<ITable<E>> {
    this._table = await this.reader.read(entity);

    return this._table;
  }
}

export default BaseReader;

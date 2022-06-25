import { IEntity } from '@punica/common';
import { BaseTableController } from '.';
import { IData } from '@punica/table-model';

class TableController<E extends IEntity> extends BaseTableController<E> {
  /**
   *
   * @param scheme
   */
  constructor(scheme: E) {
    super(scheme);
  }

  /**
   *
   * @param reader
   */
  public send = (): Promise<IData<E>> => {
    return new Promise(async (resolve) => {
      const { search } = this._table;
      const { getData, operation } = search;
      const filter: Array<string> | string = [];

      let data: IData<E> = {
        entities: [],
        totalCount: 0
      };

      if (this._table.filter) {
        for (const key in this._table.filter.data) {
          filter.push(`${key}${this._table.filter.data[key]}`);
        }
      }

      if (operation) {
        data = await operation(
          this._table?.pagination,
          filter.join(','),
          this._table?.sorts?.data
        );
      } else if (getData) {
        data = await getData();
      }

      resolve(data);
    });
  };
}

export default TableController;

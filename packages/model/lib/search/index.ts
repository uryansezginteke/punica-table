import { IEntity } from '@punica/common';
import { IData, IPagination } from '..';

export interface ISearch<E extends IEntity> {
  getData?: () => Promise<IData<E>>;
  operation?: (
    pagination: IPagination,
    filter: any,
    sorts: any
  ) => Promise<IData<E>>;
}

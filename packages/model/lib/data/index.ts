import { IEntity } from '@punica/common';

export interface IData<E extends IEntity> {
  entities: Array<E>;
  totalCount?: number;
  hasNextPage?: boolean;
}

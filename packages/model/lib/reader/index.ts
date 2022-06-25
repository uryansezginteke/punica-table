import { IEntity } from '@punica/common';
import { ITable } from '..';

export interface IReader<E extends IEntity> {
  read: (schema: E) => Promise<ITable<E>>;
}

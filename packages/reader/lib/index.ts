import { Reader } from './reader';
import { IReader } from '@punica/table-model';
import { ColumnReader } from './decorators/readers';

const createReader = (): IReader<any> => {
  const reader = new Reader();
  const columnReader = new ColumnReader(reader);

  return columnReader;
};

export default createReader;

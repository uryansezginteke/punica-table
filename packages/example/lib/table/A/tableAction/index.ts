import { ITableAction } from '@punica/table-model';
import filterAction from './filter';

const tableActions: ITableAction = {
  label: 'Actions',
  actions: [filterAction]
};

export default tableActions;

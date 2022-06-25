import { IColumnAction } from '@punica/table-model';
import action from './update';

const actions: IColumnAction = {
  label: 'Actions',
  actions: [action]
};

export default actions;

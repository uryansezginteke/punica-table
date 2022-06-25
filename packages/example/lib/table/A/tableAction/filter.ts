import { ITableCustomAction } from '@punica/table-model';

const action: ITableCustomAction = {
  label: 'Filter',
  on: [
    {
      type: 'onclick',
      method: (): Promise<boolean> => {
        return new Promise(() => {});
      }
    }
  ]
};

export default action;

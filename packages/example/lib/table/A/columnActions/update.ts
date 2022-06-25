import { IColumnCustomAction } from '@punica/table-model';

const action: IColumnCustomAction = {
  label: 'Update',
  hide: (): boolean => {
    return true;
  },
  disable: (): boolean => {
    return true;
  },
  on: [
    {
      type: 'onClick',
      method: (): Promise<boolean> => {
        return new Promise(() => {});
      }
    }
  ]
};

export default action;

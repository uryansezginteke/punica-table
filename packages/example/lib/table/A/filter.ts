import { IFilter } from '@punica/table-model';

const filter: IFilter = {
  render: (entity: any) => {
    console.log(entity);
  },
  entity: () => {
    return new Promise(() => {});
  },
  data: {}
};

export default filter;

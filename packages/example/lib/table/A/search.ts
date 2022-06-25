import { ISearch, IData } from '@punica/table-model';
import SampleTable from '.';

/**
 *
 */
const search: ISearch<SampleTable> = {
  getData: (): Promise<IData<SampleTable>> => {
    return new Promise(() => {});
  },
  operation: (): Promise<IData<SampleTable>> => {
    return new Promise(() => {});
  }
};

export default search;

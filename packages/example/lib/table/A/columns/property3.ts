import { IColumnCustom } from '@punica/table-model';
import SampleTable from '..';

/**
 *
 */
const column: IColumnCustom = {
  label: '',
  render: (entity: SampleTable) => {
    return '<div>' + entity.property3.toDateString() + '</div>';
  }
};

export default column;

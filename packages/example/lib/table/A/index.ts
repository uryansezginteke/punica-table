import { IEntity } from '@punica/common';
import { GUID } from '@punica/util';
import rowStyle from './rowStyle';
import actions from './columnActions';
import tableAction from './tableAction';
import search from './search';
import pagination from './pagination';
import filter from './filter';
import sort from './sort';
import { property1Column, property2Column, property3Column } from './columns';
import {
  Title,
  RowStyle,
  Pagination,
  Search,
  Column,
  ColumnAction,
  ColumnCustom,
  TableAction,
  Filter,
  Sort
} from '@punica/table-model';

@Title('Table')
@Pagination(pagination)
@Search(search)
@ColumnAction(actions)
@RowStyle(rowStyle)
@Filter(filter)
@Sort(sort)
@TableAction(tableAction)
class SampleTable implements IEntity {
  @Column(property1Column)
  public property1 = 5;
  @Column(property2Column)
  public property2 = 'test';
  @ColumnCustom(property3Column)
  public property3: Date = new Date();

  public id: string = GUID().uuid();
}

export default SampleTable;

import { IOption } from '@punica/common';

export interface ISortOption extends IOption {
  [key: string]: any;
}

export interface ISort {
  data: string;
  options: Array<ISortOption>;
}

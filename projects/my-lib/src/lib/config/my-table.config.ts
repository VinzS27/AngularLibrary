import {MyAction} from './class/my-action';
import {MyPagination} from './class/my-pagination';
import {MySearch} from './class/my-search';
import {MyHeaders} from './class/my-headers';
import {MyOrder} from './class/my-order';

export class MyTableConfig {
  headers!: MyHeaders[];
  order!: MyOrder;
  search!: MySearch;
  pagination!: MyPagination;
  actions!: MyAction[];
}



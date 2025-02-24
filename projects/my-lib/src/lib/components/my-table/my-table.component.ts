import {Component, input, signal, output, effect} from '@angular/core';
import {PaginationPipe} from '../../pipe/pagination.pipe';
import {FormsModule} from '@angular/forms';
import {FilterPipe} from '../../pipe/filter.pipe';
import {SortPipe} from '../../pipe/sort.pipe';
import {MyButtonComponent} from '../my-button/my-button.component';
import {MyTableConfig} from '../../config/my-table.config';
import {MyTableActionEnum} from '../../config/class/my-table-action-enum';
import {MyOrder} from '../../config/class/my-order';

@Component({
  selector: 'my-table',
  standalone: true,
  imports: [PaginationPipe, FormsModule, FilterPipe, SortPipe, MyButtonComponent],
  templateUrl: './my-table.component.html',
  styleUrls: ['./my-table.component.css']
})

export class MyTableComponent {
  readonly tableConfig = input<MyTableConfig>();
  readonly data = input<any[]>([]);
  protected readonly MyTableActionEnum = MyTableActionEnum;

  actionEvent = output<{ action: MyTableActionEnum, row?: any }>();

  searchText = signal('');
  currentPage = signal(1);
  order = signal<MyOrder | undefined>({ defaultColumn: 'id', orderType: 'asc' });
  itemsPerPage = signal(1);

  constructor() {
    effect(() => {
      const config = this.tableConfig();
      if (config) {
        if (config.order) {
          this.order.set({ ...config.order });
        }

        if (config.pagination?.itemPerPage) {
          this.itemsPerPage.set(config.pagination.itemPerPage);
        }
      }});
  }

  sortBy(column: string) {
    if (this.order()?.defaultColumn === column) {
      this.order.update(o => ({
        defaultColumn: column,
        orderType: o?.orderType === 'asc' ? 'desc' : 'asc'}));
    }else{
      this.order.set({defaultColumn: column, orderType: 'asc'});
    }
  }

  get totalPages(): number {
    return Math.ceil(this.data().length / (this.itemsPerPage() || 1));
  }

  changePage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage.set(page);
    }
  }

  onAction(actionType: MyTableActionEnum, row?: any) {
    this.actionEvent.emit({action: actionType, row});
  }

  changeItemsPerPage(event: Event) {
    const target = event.target as HTMLSelectElement;
    const value = Number(target.value);
    this.itemsPerPage.set(value);
    this.currentPage.set(1);
  }
}

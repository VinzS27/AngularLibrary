import { Pipe, PipeTransform } from '@angular/core';
import {MyOrder} from '../config/class/my-order';


@Pipe({
  name: 'sortPipe',
  standalone: true,
  pure: false
})
export class SortPipe implements PipeTransform {
  transform(data: any[], order?: MyOrder): any[] {
    if (!order || !order.defaultColumn) return data;

    const column = order.defaultColumn;
    return [...data].sort((a, b) => {
      const valueA = a[column];
      const valueB = b[column];

      if (typeof valueA === 'string' && typeof valueB === 'string') {
        return order.orderType === 'asc' ? valueA.localeCompare(valueB) : valueB.localeCompare(valueA);
      } else {
        return order.orderType === 'asc' ? valueA - valueB : valueB - valueA;
      }
    });
  }
}

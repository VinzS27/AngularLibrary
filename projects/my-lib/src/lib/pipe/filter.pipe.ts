import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filterPipe',
  standalone: true,
})
export class FilterPipe implements PipeTransform {
  transform(data: any[], searchText: string, columns: string[]): any[] {
    if (!searchText || !columns?.length) return data;

    return data.filter(row =>
      columns.some(column =>
        row[column]?.toString().toLowerCase().includes(searchText.toLowerCase())
      )
    );
  }
}

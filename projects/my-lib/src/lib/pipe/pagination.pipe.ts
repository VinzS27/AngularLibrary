import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'paginatePipe',
  standalone: true,
})

export class PaginationPipe implements PipeTransform{
  transform(data: any[], page: number, itemsPerPage: number): any[] {

    if (!data || data.length === 0) return [];
    const startIndex = (page - 1) * itemsPerPage;

    return data.slice(startIndex, startIndex + itemsPerPage);
  }
}

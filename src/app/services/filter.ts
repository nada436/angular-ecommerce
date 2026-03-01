import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Filter {
  searchTerm: string = '';
  sortOrder: string = 'asc';

  updateFilters(search: string, sort: string) {
    this.searchTerm = search;
    this.sortOrder = sort;
  }

  
  filterAndSortProducts(list: any[]) {
    let result = list.filter(p =>
      p.title?.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      p.brand?.toLowerCase().includes(this.searchTerm.toLowerCase())
    );

    result.sort((a, b) =>
      this.sortOrder === 'asc'
        ? a.price - b.price
        : b.price - a.price
    );

    return result;
  }
}

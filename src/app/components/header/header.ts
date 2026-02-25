import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  searchTerm: string = '';
  selectedBrand: string = '';
  sortOrder: string = 'asc';

  @Output() filterChanged = new EventEmitter<{
    searchTerm: string;
    sortOrder: string;
  }>();

  applyFilter() {
    this.filterChanged.emit({
      searchTerm: this.searchTerm,
      sortOrder: this.sortOrder,
    });
  }

  toggleSort() {
    this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
    this.applyFilter();
  }
}
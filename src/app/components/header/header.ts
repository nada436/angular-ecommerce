import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule} from '@angular/forms';


@Component({
  selector: 'app-header',
  imports: [FormsModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
    searchTerm: string = '';
  selectedBrand: string = '';
  sortOrder: string = '';

 @Output() filterChanged = new EventEmitter<{ searchTerm: string; selectedBrand: string; sortOrder: string }>();

  applyFilter() {
    this.filterChanged.emit({
      searchTerm: this.searchTerm,
      selectedBrand: this.selectedBrand,
      sortOrder: this.sortOrder,
    });
  }
}

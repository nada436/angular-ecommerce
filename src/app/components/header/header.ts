import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Filter } from '../../services/filter';
import { RouterLink } from '@angular/router';
import { IsLogin } from '../../services/is-login';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  searchTerm: string = '';
  selectedBrand: string = '';
  sortOrder: string = 'asc';
constructor(private Filter: Filter ,public isLogin: IsLogin) {
 
}
 applyFilter() {
    this.Filter.updateFilters(this.searchTerm,this.sortOrder)}

  toggleSort() {
    this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
    this.applyFilter();
  }
}

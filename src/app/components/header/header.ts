import { Component, signal, effect, PLATFORM_ID, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule, isPlatformBrowser } from '@angular/common';
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
  constructor(private Filter: Filter ,public isLogin: IsLogin,@Inject(PLATFORM_ID) private platformId: Object) {}
 theme = signal<'light' | 'dark'>('light');

  toggleTheme() {
    this.theme.update(v => (v === 'light' ? 'dark' : 'light'));
  }

  _themeFx = effect(() => {
    if (isPlatformBrowser(this.platformId)) {
      const isDark = this.theme() === 'dark';
      document.documentElement.classList.toggle('dark', isDark);
    }
  });


  applyFilter() {
    this.Filter.updateFilters(this.searchTerm,this.sortOrder)
  }

  toggleSort() {
    this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
    this.applyFilter();
  }
}

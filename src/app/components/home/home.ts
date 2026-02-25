import { Component, input } from '@angular/core';
import { Slider } from '../slider/slider';
import { Product } from '../product/product';
import { Header } from '../header/header';




@Component({
  selector: 'app-home',
  standalone:true,
  imports: [Slider, Product,Header],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
 searchTerm: string = '';
  sortOrder: string = 'asc';


  onFilterChanged(filters: { searchTerm: string; sortOrder: string }) {
    this.searchTerm = filters.searchTerm;
    this.sortOrder = filters.sortOrder;

    console.log('Search Term:', this.searchTerm);
    console.log('Sort Order:', this.sortOrder);
  }
}
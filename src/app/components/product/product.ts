import { Component, DoCheck, Input, OnChanges, OnInit } from '@angular/core';
import { Card } from '../card/card';
import { Iproduct } from '../../models/iproduct';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import { ProductService } from '../../services/product-service';
import { Filter } from '../../services/filter';
import { FormDialog } from '../form-editdialog/form-dialog';
import { ActivatedRoute, NavigationEnd, Route, Router, RouterModule } from '@angular/router';
import { filter } from 'rxjs';
import { IsLogin } from '../../services/is-login';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [Card, FormsModule, CommonModule], 
templateUrl: './product.html',
  styleUrls: ['./product.css']
})
export class Product implements DoCheck, OnInit {
 list: Iproduct[] = [];
  filteredList: Iproduct[] = [];
   private prevSearch = '';
  private prevSort = '';
  
   totalAmount: number = 0;


  constructor(
    private productService: ProductService,
    private filterService: Filter,
    private route: ActivatedRoute,
    public IsLogin: IsLogin
  ) {
   
  }

ngOnInit() {
    this.route.data.subscribe(({ products }) => {
      this.list = products as Iproduct[]; 
      this.filteredList = this.filterService.filterAndSortProducts(this.list);    
       
    });
  }

  

  ngDoCheck() { //with any change
    if (
      this.prevSearch !== this.filterService.searchTerm ||
      this.prevSort !== this.filterService.sortOrder
    ) {
      this.prevSearch = this.filterService.searchTerm;
      this.prevSort = this.filterService.sortOrder;

      this.filteredList =
        this.filterService.filterAndSortProducts(this.list);
    }
  }

  addToTotal(price: number) {
    this.totalAmount += price;
  }

  onProductDeleted(id: number) {
  this.productService.deleteOneProduct(id).subscribe(() => {
    this.productService.getall().subscribe((res: Iproduct[]) => {
      this.list = res;
      this.filteredList = this.filterService.filterAndSortProducts(this.list);
    });
  });
}
 
 

  
 }

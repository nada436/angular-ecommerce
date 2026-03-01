import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product-service';
import { Iproduct } from '../../models/iproduct';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule, Location } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-details.html',
  styleUrls: ['./product-details.css'],
})
export class ProductDetails implements OnInit {
  product: Iproduct = {} as Iproduct;
  id!: number;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private _location: Location,
     private router: Router,
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe(({ product }) => {
      this.product = product as Iproduct;
    });
  }

 
}

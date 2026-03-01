import { Component, OnInit } from '@angular/core';
import { FormDialog } from '../form-editdialog/form-dialog';
import { ProductService } from '../../services/product-service';
import { Iproduct } from '../../models/iproduct';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  imports: [FormDialog],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard  implements OnInit{
constructor(private productService: ProductService,    private route: ActivatedRoute,private router: Router) {}
  showadd=false
   addProductFn() {
  this.showadd=true
}
productCount :number=0;
outOfStockCount :number=0 ;

ngOnInit() {
  this.route.data.subscribe(({ products }) => {
    const productList = products as Iproduct[];  
    this.productCount = productList.length;   
    this.outOfStockCount = productList.filter(p => p.stock === 0).length;    
  });
}
onConfirmadd(addedData: Partial<Iproduct>) {
 this.productService.addOneProduct(addedData).subscribe({
  next: (res) => {
    console.log('Product added', res);
    this.showadd = false;
    this.router.navigate(['/home']);
  },
  error: (err) => {
    console.error('Error adding product', err);
  }
})
}
}




import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Iproduct } from '../../models/iproduct';
import { ProductService } from '../../services/product-service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Button } from '../button/button';
import { CardShadowDirective } from '../../directives/card-shadow';
import { TruncatePipe } from '../../pipes/truncate-pipe';
import { ConfirmDialog } from '../confirm-dialog/confirm-dialog';
import { FormDialog } from '../form-editdialog/form-dialog';
import { IsLogin } from '../../services/is-login';

@Component({
  selector: 'app-card',
  standalone: true, 
  imports: [Button, CardShadowDirective, RouterLink, TruncatePipe, CommonModule,ConfirmDialog,FormDialog],
  templateUrl: './card.html',
  styleUrls: ['./card.css'], 
})
export class Card {
  @Output() deleted = new EventEmitter<number>();
  @Input() product!: Iproduct;
  @Output() buy: EventEmitter<number> = new EventEmitter<number>();
  showConfirm = false;
  productIdToDelete!: number;
  showFullDescription = false;
  showEdit=false
  constructor(private productService: ProductService,public IsLogin: IsLogin) {}

  toggleDescription() {
    this.showFullDescription = !this.showFullDescription;
  }

  handleBuy() {
    this.buy.emit(this.product.price);
  }

removeProduct(id: number) {
  this.productIdToDelete = id; 
  this.showConfirm = true;     

   
}

onConfirmDelete() {
  this.productService.deleteOneProduct(this.productIdToDelete);
     this.deleted.emit(this.productIdToDelete); 
  this.showConfirm = false;
}

updateProduct(product: Iproduct) {
  this.showEdit = true; 
}

onConfirmUpdate(updatedData: Partial<Iproduct>) {
  const updated: Iproduct = { ...this.product, ...updatedData };

  this.productService.updateProduct(this.product.id, updated).subscribe({
    next: (res) => {
      Object.assign(this.product, res);
      this.showEdit = false;
    },
    error: err => console.error(err)
  });
}
  
  }







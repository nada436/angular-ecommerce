import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Iproduct } from '../../models/iproduct';

@Component({
  selector: 'app-form-dialog',
  imports: [CommonModule, FormsModule],
  templateUrl: './form-dialog.html',
  styleUrl: './form-dialog.css',
})
export class FormDialog {
@Input() isVisible: boolean = false;
  @Input() product!: any;

   @Output() saved = new EventEmitter<Partial<Iproduct>>();
   @Output() cancelled = new EventEmitter<void>();
    @Input() header:string='';
   onSave() {
  this.saved.emit({ 
    title: this.form.title,
    brand: this.form.brand,
    price: this.form.price,
    thumbnail:this.form.thumbnail,
    stock:this.form.stock
  }); 
}
  form = { title: '', brand: '', price: 0, thumbnail:'',stock:0};

  
  ngOnChanges() {
    if (this.product) {
      this.form = {
        title: this.product.title,
        brand: this.product.brand,
        price: this.product.price,
        thumbnail:this.product.thumbnail,
        stock:this.product.stock
      };
    }
  }

  onCancel() {
     this.cancelled.emit();
  }

  onOverlayClick(event: MouseEvent) {
    if ((event.target as HTMLElement).classList.contains('modal-overlay')) {
       this.cancelled.emit();
    }
  }
}

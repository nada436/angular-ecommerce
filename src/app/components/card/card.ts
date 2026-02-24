import { Component, EventEmitter, Input,  Output } from '@angular/core';
import { Button } from '../button/button';
import { Iproduct } from '../../models/iproduct';
import { Product } from '../product/product';
import { CardShadowDirective } from '../../directives/card-shadow';
import { TruncatePipe } from '../../pipes/truncate-pipe';

@Component({
  selector: 'app-card',
  imports: [Button,CardShadowDirective,TruncatePipe],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
@Input() product!: Iproduct;
@Output() buy: EventEmitter<number> = new EventEmitter<number>(); // نبعت السعر
 showFullDescription = false;

  toggleDescription() {
    this.showFullDescription = !this.showFullDescription;}
  handleBuy() {
    this.buy.emit(this.product.price); 
  }

}

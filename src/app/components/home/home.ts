import { Component } from '@angular/core';
import { Slider } from '../slider/slider';
import { Product } from '../product/product';
import { Header } from "../header/header";



@Component({
  selector: 'app-home',
  imports: [Slider, Product, Header],
templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
 
}

import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from './components/footer/footer';
import { Home } from './components/home/home';
import { Product } from './components/product/product';
import { Header } from './components/header/header';

@Component({
  selector: 'app-root',
  imports: [Footer,Header,Home,Product],
  
templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular1');
}

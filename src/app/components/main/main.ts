import { Component } from '@angular/core';
import { Footer } from "../footer/footer";
import { RouterOutlet } from '@angular/router';
import { Header } from "../header/header";


@Component({
  selector: 'app-main',
  imports: [Footer, RouterOutlet, Header],
  templateUrl: './main.html',
  styleUrl: './main.css',
})
export class Main {

}

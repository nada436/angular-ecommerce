import { Component } from '@angular/core';
import {  CommonModule, NgClass, NgStyle } from '@angular/common';

@Component({
  selector: 'app-slider',    
  imports: [CommonModule],   
  templateUrl: './slider.html',
  styleUrls: ['./slider.css']
})
export class Slider {
  slides = [
    '1.jpg',
    '2.jpg',
    '3.jpg'
  ];

  currentIndex = 0;

  getTransform(): string {
    return `translateX(-${this.currentIndex * 100}%)`;
  }

  nextSlide(): void {
    if (this.currentIndex < this.slides.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }
  }

  prevSlide(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.slides.length - 1;
    }
  }
}
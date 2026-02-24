import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appCardShadow]',
  standalone: true  
})
export class CardShadowDirective {
  @Input() zoomScale: number = 1.05;

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.transition = 'all 0.3s ease';
  }

  @HostListener('mouseenter')
  onEnter() {
    this.el.nativeElement.style.transform = `scale(${this.zoomScale})`;
    this.el.nativeElement.style.boxShadow = '0 10px 25px rgba(0,0,0,0.3)';
  }

  @HostListener('mouseleave')
  onLeave() {
    this.el.nativeElement.style.transform = 'scale(1)';
    this.el.nativeElement.style.boxShadow = '0 2px 6px rgba(0,0,0,0.15)';
  }
}
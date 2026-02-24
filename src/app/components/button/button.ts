
import { Component, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.css',
})
export class Button {
@Input() title!: string;
@Output() action = new EventEmitter<void>();

handleClick() {
  this.action.emit(); }}
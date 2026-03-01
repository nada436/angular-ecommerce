
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-button',
  imports: [FormsModule],
  templateUrl: './button.html',
  styleUrl: './button.css',
})
export class Button {
@Input() title!: string;
@Input() show!: boolean;
@Output() action = new EventEmitter<void>();

handleClick() {
  this.action.emit(); }}
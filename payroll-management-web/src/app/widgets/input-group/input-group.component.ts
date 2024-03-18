import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-input-group',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input-group.component.html',
  styles: ``
})
export class InputGroupComponent {

  valid = input.required<boolean>();

} 

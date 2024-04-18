import { Component, input } from '@angular/core';

@Component({
  selector: 'app-card-info-row',
  templateUrl: './card-info-row.component.html',
  styles: ``
})
export class CardInfoRowComponent {

  label = input.required<string>();
  data = input.required<any>()
  
}

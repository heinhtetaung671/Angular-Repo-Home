import { Component, input } from '@angular/core';

@Component({
  selector: 'app-form-control-group',
  standalone: true,
  imports: [],
  templateUrl: './form-control-group.component.html',
  styles: ``
})
export class FormControlGroupComponent {

  label = input.required<string>();

}

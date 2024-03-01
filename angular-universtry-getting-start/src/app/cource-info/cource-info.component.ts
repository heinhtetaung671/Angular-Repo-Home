import { Component, Input, input } from '@angular/core';
import { Course } from '../../model/Course';

@Component({
  selector: 'app-cource-info',
  standalone: true,
  imports: [],
  templateUrl: './cource-info.component.html',
  styles: ``,
})
export class CourceInfoComponent {
 
  @Input({
    required: true,
  })
  course: Course = {
    id: 1,
    name: 'default',
    fees: 300000,
    discription: 'default discription',
  };
  
}

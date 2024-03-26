import { Component } from '@angular/core';
import { DepartmentSideBarComponent } from './department-side-bar/department-side-bar.component';

@Component({
  selector: 'app-department-details',
  standalone: true,
  imports: [DepartmentSideBarComponent],
  templateUrl: './department-details.component.html',
  styles: ``
})
export class DepartmentDetailsComponent {

}

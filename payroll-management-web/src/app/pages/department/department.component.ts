import { Component } from '@angular/core';
import { DepartmentSideBarComponent } from './department-side-bar/department-side-bar.component';

@Component({
  selector: 'app-department',
  standalone: true,
  imports: [DepartmentSideBarComponent],
  templateUrl: './department.component.html',
  styleUrl: `./department.component.css`
})
export class DepartmentComponent {

}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DepartmentNavComponent } from './department-nav/department-nav.component';

@Component({
  selector: 'app-department',
  standalone: true,
  imports: [RouterOutlet, DepartmentNavComponent],
  templateUrl: './department.component.html',
})
export class DepartmentComponent {

}

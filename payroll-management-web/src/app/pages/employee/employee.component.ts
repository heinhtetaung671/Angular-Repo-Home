import { Component } from '@angular/core';
import { EmployeeNavComponent } from './employee-nav/employee-nav.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeAddComponent } from './employee-add/employee-add.component';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [EmployeeNavComponent, EmployeeListComponent, EmployeeAddComponent],
  templateUrl: './employee.component.html',
  styles: ``
})
export class EmployeeComponent {

}

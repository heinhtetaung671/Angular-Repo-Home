import { Routes } from '@angular/router';
import { EmployeeComponent } from './pages/employee/employee.component';
import { DepartmentComponent } from './pages/department/department.component';

export const routes: Routes = [
  {
    path: 'employee',
    component: EmployeeComponent,
    title: 'PMS | Employee',
  },
  {
   path: 'department',
   component: DepartmentComponent,
   title: 'PMS | Department'
  }
];

import { Routes } from '@angular/router';
import { EmployeeComponent } from './pages/employee/employee.component';

export const routes: Routes = [
   {
      path: 'employee',
      component: EmployeeComponent,
      title: 'PMS | Employee'
   }
];

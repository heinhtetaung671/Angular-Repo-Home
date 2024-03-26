import { Routes } from '@angular/router';
import { EmployeeComponent } from './pages/employee/employee.component';
import { DepartmentComponent } from './pages/department/department.component';
import { DepartmentDetailsComponent } from './pages/department/department-details/department-details.component';
import { DepartmentAddComponent } from './pages/department/department-add/department-add.component';
import { DepartmentDashboardComponent } from './pages/department/department-dashboard/department-dashboard.component';

export const routes: Routes = [
  {
    path: 'employee',
    component: EmployeeComponent,
    title: 'PMS | Employee',
  },
  {
   path: 'department',
   component: DepartmentComponent,
   title: 'PMS | Department',
   children: [
    { path: 'details', component: DepartmentDetailsComponent, title: 'Department | Details' },
    { path: 'add', component: DepartmentAddComponent, title: 'Department | Add' },
    { path: 'dashboard', component: DepartmentDashboardComponent, title: 'Department | Dashboard' },
    { path: '', redirectTo: '/department/details', pathMatch: 'full'}
   ]
  }
];

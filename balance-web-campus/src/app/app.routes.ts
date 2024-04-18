import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CategoryComponent } from './pages/category/category.component';
import { BalanceListComponent } from './pages/balance-list/balance-list.component';
import { BalanceReportComponent } from './pages/balance-report/balance-report.component';
import { BalanceEditComponent } from './pages/balance-edit/balance-edit.component';
import { BalanceDetailsComponent } from './pages/balance-details/balance-details.component';
import { CategoryEditComponent } from './pages/category-edit/category-edit.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { EmployeeEditComponent } from './pages/employee-edit/employee-edit.component';
import { LoginComponent } from './pages/login/login.component';
import { EmployeeDetailsComponent } from './pages/employee-details/employee-details.component';

export const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'category', component: CategoryComponent},
  {path: 'category-edit', component: CategoryEditComponent},
  {path: 'employee', component: EmployeeComponent},
  {path: 'employee-edit', component: EmployeeEditComponent},
  {path: 'employee-details', component: EmployeeDetailsComponent},
  {path: 'incomes', component: BalanceListComponent, data: {type: 'Income'}},
  {path: 'expenses', component: BalanceListComponent, data: {type: 'Expense'}},
  {path: 'report', component: BalanceReportComponent},
  {path: 'edit', component: BalanceEditComponent},
  {path: 'details', component: BalanceDetailsComponent},
  {path: 'login', component: LoginComponent, title: 'Login'},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

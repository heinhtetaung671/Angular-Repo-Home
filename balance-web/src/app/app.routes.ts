import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CategoryComponent } from './pages/category/category.component';
import { CategoryEditComponent } from './pages/category-edit/category-edit.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { EmployeeEditComponent } from './pages/employee-edit/employee-edit.component';
import { BalanceListComponent } from './pages/balance-list/balance-list.component';
import { BalanceReportComponent } from './pages/balance-report/balance-report.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

export const routes: Routes = [
   { path: 'home', component: HomeComponent, title: 'Home'},
   { path: 'category', component: CategoryComponent, title: 'Category'},
   { path: 'category-edit', component: CategoryEditComponent, title: 'Category-edit'},
   { path: 'employee', component: EmployeeComponent, title: 'Employee'},
   { path: 'employee-edit', component: EmployeeEditComponent, title: 'employee-edit'},
   { path: 'income', component: BalanceListComponent, title: 'Income', data: {type: 'income'}},
   { path: 'expense', component: BalanceListComponent, title: 'Expense', data: {type: 'expense'}},
   { path: 'report', component: BalanceReportComponent, title: 'Balance Report'},
   { path: '', redirectTo: '/home', pathMatch: 'full'},
   { path: '**', component: PageNotFoundComponent, title: 'Page Not Found'}
   
];

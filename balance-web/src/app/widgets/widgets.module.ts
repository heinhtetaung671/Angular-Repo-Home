import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavLinkComponent } from './nav-link/nav-link.component';
import { RouterLink } from '@angular/router';
import { PageTitleComponent } from './page-title/page-title.component';
import { SearchInputGroupComponent } from './search-input-group/search-input-group.component';
import { SearchListLayoutComponent } from './search-list-layout/search-list-layout.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    NavLinkComponent,
    PageTitleComponent,
    SearchInputGroupComponent,
    SearchListLayoutComponent,
  ],
  imports: [
    CommonModule,
    RouterLink,
    ReactiveFormsModule
  ],
  exports: [
    NavLinkComponent,
    PageTitleComponent,
    SearchInputGroupComponent,
    SearchListLayoutComponent,
  ]
})
export class WidgetsModule { }

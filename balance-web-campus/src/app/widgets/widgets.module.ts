import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavLinkComponent } from './nav-link/nav-link.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { PageTitleComponent } from './page-title/page-title.component';
import { ListViewComponent } from './list-view/list-view.component';
import { SearchFormGroupComponent } from './search-form-group/search-form-group.component';
import { ValidatedFormGroupComponent } from './validated-form-group/validated-form-group.component';
import { PaginationComponent } from './pagination/pagination.component';
import { InputGroupComponent } from './input-group/input-group.component';
import { CardComponent } from './card/card.component';
import { CardInfoRowComponent } from './card-info-row/card-info-row.component';



@NgModule({
  declarations: [
    NavLinkComponent,
    PageTitleComponent,
    ListViewComponent,
    SearchFormGroupComponent,
    ValidatedFormGroupComponent,
    PaginationComponent,
    InputGroupComponent,
    CardComponent,
    CardInfoRowComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive
  ],
  exports: [
    NavLinkComponent,
    PageTitleComponent,
    ListViewComponent,
    SearchFormGroupComponent,
    ValidatedFormGroupComponent,
    PaginationComponent,
    InputGroupComponent,
    CardComponent,
    CardInfoRowComponent
  ]
})
export class WidgetsModule { }

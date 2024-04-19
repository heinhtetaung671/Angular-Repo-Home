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
import { ErrorMessageComponent } from './error-message/error-message.component';
import { FitToParentComponent } from './fit-to-parent/fit-to-parent.component';
import { LoadingScreenComponent } from './loading-screen/loading-screen.component';



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
    CardInfoRowComponent,
    ErrorMessageComponent,
    FitToParentComponent,
    LoadingScreenComponent
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
    CardInfoRowComponent,
    ErrorMessageComponent,
    FitToParentComponent,
    LoadingScreenComponent
  ]
})
export class WidgetsModule { }

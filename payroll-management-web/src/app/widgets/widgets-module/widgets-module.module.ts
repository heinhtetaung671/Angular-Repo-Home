import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControlGroupComponent } from '../form-control-group/form-control-group.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormControlGroupComponent
  ],
  exports: [FormControlGroupComponent]
})
export class WidgetsModule { }

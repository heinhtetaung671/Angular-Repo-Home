import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControlGroupComponent } from '../form-control-group/form-control-group.component';
import { InputGroupComponent } from '../input-group/input-group.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormControlGroupComponent,
    InputGroupComponent
  ],
  exports: [FormControlGroupComponent, InputGroupComponent]
})
export class WidgetsModule { }

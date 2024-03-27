import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControlGroupComponent } from '../form-control-group/form-control-group.component';
import { InputGroupComponent } from '../input-group/input-group.component';
import { FormRowComponent } from '../form-row/form-row.component';


@NgModule({
  declarations: [
    FormRowComponent
  ],
  imports: [
    CommonModule,
    FormControlGroupComponent,
    InputGroupComponent
  ],
  exports: [FormControlGroupComponent, InputGroupComponent, FormRowComponent]
})
export class WidgetsModule { }

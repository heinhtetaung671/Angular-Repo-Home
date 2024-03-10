import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroupComponent } from './form-group/form-group.component';
import { InputGroupComponent } from './input-group/input-group.component';



@NgModule({
  declarations: [FormGroupComponent, InputGroupComponent],
  imports: [
    CommonModule
  ],
  exports: [
    FormGroupComponent,
    InputGroupComponent
  ]
})
export class WidgetsModule { }

import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { max } from 'rxjs';
import { WidgetsModule } from '../../../widgets/widgets-module/widgets-module.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-department-add',
  standalone: true,
  imports: [ReactiveFormsModule, WidgetsModule, CommonModule],
  templateUrl: './department-add.component.html',
  styles: ``
})
export class DepartmentAddComponent {

  departmentForm: FormGroup;

  constructor(fb: FormBuilder){
    this.departmentForm = fb.group({
      code: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(3)]],
      name: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      desc: ''
    })
  }

  getControl(controlName: string){
    return this.departmentForm.controls[controlName] as FormControl
  }

}

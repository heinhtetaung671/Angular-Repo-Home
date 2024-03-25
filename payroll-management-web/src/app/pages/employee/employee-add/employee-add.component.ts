import { Component } from '@angular/core';
import {
  FormArray,
  FormArrayName,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { WidgetsModule } from '../../../widgets/widgets-module/widgets-module.module';
import { CommonModule, formatCurrency } from '@angular/common';

@Component({
  selector: 'app-employee-add',
  standalone: true,
  imports: [ReactiveFormsModule, WidgetsModule, CommonModule],
  templateUrl: './employee-add.component.html',
  styles: ``,
})
export class EmployeeAddComponent {
  employeeForm: FormGroup;

  constructor() {
    this.employeeForm = new FormGroup({
      name: new FormControl('', Validators.required),

      password: new FormControl('', Validators.required),
      departmentId: new FormControl(0, [
        Validators.required,
        Validators.min(1),
      ]),
      positionId: new FormControl(0, [Validators.required, Validators.min(1)]),
      phones: new FormArray([
        new FormControl(0, Validators.required),
      ]),
      emails: new FormArray([
        new FormControl('', [Validators.required, Validators.email]),
      ])
    });
  }

  isControlValid(control: string): boolean {
    return this.employeeForm.controls[control].valid;
  }

  isControlFromArrayValid(formArrayName: string) {
    return (control: number) =>
      (this.employeeForm.controls[formArrayName] as FormArray).controls[control]
        .valid;
  }

  canAdd(fromArrayName: string): boolean {
    return (this.employeeForm.controls[fromArrayName] as FormArray).length < 3;
  }

  canRemoveEmail(): boolean {
    return this.emails.length > 1;
  }

  canRemovePhone(): boolean {
    return this.phones.length > 1;
  }

  removeControlFromPhoneFormArray(index: number) {
    if (this.canRemovePhone()) {
      this.phones.removeAt(index);
    }
  }

  removeControlFromEmailFormArray(index: number) {
    if(this.canRemoveEmail())
    this.emails.removeAt(index);
  }

  addControlToFormArray(formArrayName: string) {
    if (this.canAdd(formArrayName)) {
      (this.employeeForm.controls[formArrayName] as FormArray).push(
        formArrayName == 'email'
          ? new FormControl('', [Validators.required, Validators.email])
          : new FormControl(0, Validators.required)
      );
    }
  }

  get phones() {
    return this.employeeForm.controls['phones'] as FormArray;
  }

  get emails() {
    return this.employeeForm.controls['emails'] as FormArray;
  }
}

import { Component, computed, effect, input, signal } from '@angular/core';
import { WidgetsModule } from '../../widgets/widgets.module';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ROLES } from '../../model/balance-model';
import { EmployeeService } from '../../service/employee.service';
import { Router } from '@angular/router';
import { ApiResponseUtils } from '../../model/api-response-utils';
import { ValidationErrorMessage } from '../../model/balance-app';
import { error } from 'console';

@Component({
  selector: 'app-employee-edit',
  standalone: true,
  imports: [WidgetsModule, ReactiveFormsModule],
  templateUrl: './employee-edit.component.html',
  styles: ``,
})
export class EmployeeEditComponent {
  id = input<any>();

  edit = computed<boolean>(() => this.id() != undefined);
  icon = computed<string>(() => (this.edit() ? 'bi-pencil' : 'bi-plus-lg'));
  title = computed<string>(
    () => `${this.edit() ? 'Edit' : 'Add New'} Employee`
  );

  roles = signal<string[]>(ROLES);

  form: FormGroup;
  validationErrorMessage = signal<ValidationErrorMessage>({});
  otherErrorMessage = signal<string>('');

  constructor(
    builder: FormBuilder,
    private service: EmployeeService,
    private router: Router
  ) {
    this.form = builder.group({
      name: ['', Validators.required],
      role: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required],
    });

    effect(() => {
      if (this.edit()) {
        service.findByIdForEdit(this.id()).subscribe((result) => {
          if (ApiResponseUtils.isSuccess(result.status)) {
            this.form.patchValue(result.payload);
          }
        });
      }
    });
  }

  save() {
    const response = this.edit()
      ? this.service.update(this.id(), this.form.value)
      : this.service.create(this.form.value);

    response.subscribe((result) => {
      if (ApiResponseUtils.isSuccess(result.status)) {
        this.router.navigate(['/employee']);
      } 
    }, error => {
      this.validationErrorMessage.set(error.error.payload)
        console.log(error.error.payload)
        // if (ApiResponseUtils.isValidationError(error)) {
          // this.validationErrorMessage.set(result.payload);
          // console.log(result.payload)
        // } else {
          // this.otherErrorMessage.set(result.payload);
        // }
      
    })
  }
}

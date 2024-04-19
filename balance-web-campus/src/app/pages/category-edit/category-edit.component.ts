import { Component, computed, effect, input, signal } from '@angular/core';
import { WidgetsModule } from '../../widgets/widgets.module';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { BALANCE_TYPES } from '../../model/balance-model';
import { CategoryService } from '../../service/category.service';
import { Router } from '@angular/router';
import { ApiResponseUtils } from '../../model/api-response-utils';
import { ValidationErrorMessage } from '../../model/balance-app';
import { ApiResponse } from '../../model/api-response';

@Component({
  selector: 'app-category-edit',
  standalone: true,
  imports: [WidgetsModule, ReactiveFormsModule],
  templateUrl: './category-edit.component.html',
  styles: ``,
})
export class CategoryEditComponent {
  icon = computed(() => (this.edit() ? 'bi-pencil' : 'bi-plus-lg'));
  title = computed(() => (this.edit() ? 'Edit Category' : 'Add New Category'));

  types = signal<string[]>(BALANCE_TYPES);
  id = input<number>(0);
  edit = computed((): boolean => {
    return this.id() ? true : false;
  });

  validationErrorMessage = signal<ValidationErrorMessage>({});
  otherErrorMessage = signal<string>('');

  form: FormGroup;

  constructor(
    builder: FormBuilder,
    private service: CategoryService,
    private router: Router
  ) {
    this.form = builder.group({
      name: ['', Validators.required],
      type: ['', Validators.required],
      description: '',
    });

    effect(() => {
      if (this.edit()) {
        service.findById(this.id()).subscribe((result) => {
          if (ApiResponseUtils.isSuccess(result.status)) {
            const { id, ...updateData } = result.payload;
            this.form.patchValue(updateData);
          }
        });
      }
    });
  }

  success(result: ApiResponse<any>) {
    if (ApiResponseUtils.isSuccess(result.status)) {
      this.router.navigate(['/category']);
    }
  }

  save() {
    let response = this.edit()
      ? this.service.update(this.id()!, this.form.value)
      : this.service.create(this.form.value);
    response.subscribe({
      next: this.success,
      error: (err) => {
        if (ApiResponseUtils.isValidationError(err.error.status)) {
          this.validationErrorMessage.set(err.error.payload);
        } else {
          this.otherErrorMessage.set(err.error.payload);
        }
      },
    });
  }
}

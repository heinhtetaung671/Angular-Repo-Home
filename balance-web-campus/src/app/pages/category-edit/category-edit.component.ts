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
import { ActivatedRoute, Router } from '@angular/router';
import { ApiResponseUtils } from '../../model/api-response-utils';

@Component({
  selector: 'app-category-edit',
  standalone: true,
  imports: [WidgetsModule, ReactiveFormsModule],
  templateUrl: './category-edit.component.html',
  styles: ``,
})
export class CategoryEditComponent {
  edit = signal<boolean>(false);
  icon = computed(() => (this.edit() ? 'bi-pencil' : 'bi-plus-lg'));
  title = computed(() => (this.edit() ? 'Edit Category' : 'Add New Category'));

  types = signal<string[]>(BALANCE_TYPES);
  id = input<number>();

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
      const categoryId = this.id();

      if (categoryId) {
        this.edit.set(true);
        service.findById(categoryId).subscribe((result) => {
          if (ApiResponseUtils.isSuccess(result.status)) {
            const { id, ...updateData } = result.payload;
            this.form.patchValue(updateData);
          }
        });
      }
    });
  }

  save() {
    let response = this.edit()
      ? this.service.update(this.id()!, this.form.value)
      : this.service.create(this.form.value);
    response.subscribe((result) => {
      if (ApiResponseUtils.isSuccess(result.status)) {
        this.router.navigate(['/category']);
      }
    });
  }
}

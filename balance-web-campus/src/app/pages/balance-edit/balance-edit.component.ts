import { Component, computed, effect, input, signal } from '@angular/core';
import { WidgetsModule } from '../../widgets/widgets.module';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { BalanceService } from '../../service/balance.service';
import { CategoryService } from '../../service/category.service';
import { CategorySelectBox } from '../../model/balance-app';
import { ApiResponseUtils } from '../../model/api-response-utils';
import { Router } from '@angular/router';

@Component({
  selector: 'app-balance-edit',
  standalone: true,
  imports: [WidgetsModule, ReactiveFormsModule],
  templateUrl: './balance-edit.component.html',
  styles: ``,
})
export class BalanceEditComponent {
  type = input<string>();
  id = input<string>('');

  edit = computed<boolean>(() => this.id() != null);
  icon = computed<string>(() => (this.edit() ? 'bi-pencil' : 'bi-plus-lg'));
  title = computed<string>(
    () => `${this.edit() ? 'Edit' : 'Add New'} ${this.type()}`
  );
  categoryList = signal<CategorySelectBox[]>([]);

  form: FormGroup;

  constructor(
    private builder: FormBuilder,
    private service: BalanceService,
    private categoryService: CategoryService,
    private router: Router
  ) {
    this.form = builder.group({
      issueDate: ['', Validators.required],
      categoryId: ['', Validators.required],
      remark: '',
      items: builder.array([]),
    });

    if (this.items.length == 0) {
      this.addItem();
    }

    effect(() => {
      if (this.edit()) {
        service.findByIdForEdit(this.id()).subscribe((result) => {
          if (result.status == 'SUCCESS') {
            this.form.patchValue(result.payload);
          }
        });
      }
    });

    this.loadCategoryForSelectBox();
  }

  get items() {
    return this.form.get('items') as FormArray;
  }

  get totalQuantity() {
    return this.items.controls
      .map((form) => form.get('quantity')?.value || 0)
      .reduce((a, b) => a + b);
  }

  get totalAmount() {
    return this.items.controls
      .map((form) => {
        const count = form.get('quantity')?.value || 0;
        const unitPrice = form.get('unitPrice')?.value || 0;
        return count * unitPrice;
      })
      .reduce((a, b) => a + b);
  }

  addItem() {
    this.items.push(
      this.builder.group({
        name: ['', Validators.required],
        unitPrice: [0, [Validators.required, Validators.min(1000)]],
        quantity: [0, [Validators.required, Validators.min(1)]],
      })
    );
  }

  removeItem(index: number) {
    this.items.removeAt(index);
    if (this.items.controls.length == 0) {
      this.addItem();
    }
  }

  getItemTotal(index: number) {
    const item = this.items.controls[index] as FormGroup;

    const quantity = item.get('quantity')?.value || 0;
    const unitPrice = item.get('unitPrice')?.value || 0;

    return quantity * unitPrice;
  }

  save() {
    const response = this.edit()
      ? this.service.update(this.id(), this.form.value)
      : this.service.create(this.form.value);

    response.subscribe((result) => {
      if (ApiResponseUtils.isSuccess(result.status)) {
        this.router.navigate(['/balance'], {queryParams: {type: this.type()}})
      }
    });
  }

  loadCategoryForSelectBox() {
    this.categoryService.loadAllForSearchBox().subscribe((result) => {
      if (ApiResponseUtils.isSuccess(result.status)) {
        this.categoryList.set(result.payload);
      }
    });
  }
}

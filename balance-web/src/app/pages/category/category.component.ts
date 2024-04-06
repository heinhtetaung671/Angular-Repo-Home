import { Component, signal } from '@angular/core';
import { WidgetsModule } from '../../widgets/widgets.module';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { CATEGORY_TYPES } from '../../model/balance-data';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [WidgetsModule, ReactiveFormsModule],
  templateUrl: './category.component.html',
  styles: ``
})
export class CategoryComponent {

  types = signal<string[]>(CATEGORY_TYPES)
  form: FormGroup

  constructor(builder: FormBuilder){
    this.form = builder.group({
      type: '',
      name: ''
    })
  }

}

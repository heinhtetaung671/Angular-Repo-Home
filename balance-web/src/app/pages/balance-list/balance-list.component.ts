import { Component, computed, effect, input, ViewEncapsulation } from '@angular/core';
import { WidgetsModule } from '../../widgets/widgets.module';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-balance-list',
  standalone: true,
  imports: [WidgetsModule, ReactiveFormsModule],
  templateUrl: './balance-list.component.html',
  styles: ``,
  encapsulation: ViewEncapsulation.None

})
export class BalanceListComponent {

  type = input<any>();
  title = computed(() => this.type() == 'income' ? 'Income Management': 'Expense Management');
  icon = computed(() => this.type()  == 'income' ? 'bi-cash-stack' : 'bi-cart-dash')
  form: FormGroup

  constructor(private builder: FormBuilder){
    this.form = builder.group({
      type: this.type(),
      from: '',
      to: '',
      keyword: ''
    })
  }

}

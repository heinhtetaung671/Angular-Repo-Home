import { Component, computed, effect, input, signal } from '@angular/core';
import { WidgetsModule } from '../../widgets/widgets.module';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { BalanceService } from '../../service/balance.service';
import { ApiResponseUtils } from '../../model/api-response-utils';

@Component({
  selector: 'app-balance-list',
  standalone: true,
  imports: [WidgetsModule, ReactiveFormsModule, RouterLink],
  templateUrl: './balance-list.component.html',
  styles: ``,
})
export class BalanceListComponent {
  type = input<string>();
  icon = computed<string>(() =>
    this.type() == 'Income' ? 'bi-cash-stack' : 'bi-cart-dash'
  );

  form: FormGroup;
  list = signal<any[]>([]);

  constructor(builder: FormBuilder, private service: BalanceService) {
    this.form = builder.group({
      type: '',
      from: '',
      to: '',
      keyword: '',
    });

    effect(() => {
      this.form.patchValue({ type: this.type() });
      this.search();
    });

  }

  search() {
    console.log(this.form.value)
    this.service.search(this.form.value).subscribe((result) => {
      if (ApiResponseUtils.isSuccess(result.status)) {
        this.list.set(result.payload.content);
      }
    });
  }
}

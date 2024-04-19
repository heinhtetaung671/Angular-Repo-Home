import { Component, computed, effect, input, signal } from '@angular/core';
import { WidgetsModule } from '../../widgets/widgets.module';
import { EmployeeInfoDetails } from '../../model/balance-app';
import { CommonModule, KeyValuePipe } from '@angular/common';
import { EmployeeService } from '../../service/employee.service';
import { ApiResponseUtils } from '../../model/api-response-utils';

@Component({
  selector: 'app-employee-details',
  standalone: true,
  imports: [WidgetsModule, CommonModule, KeyValuePipe],
  templateUrl: './employee-details.component.html',
  styleUrl: `employee-details.component.scss`
})
export class EmployeeDetailsComponent {

  id = input<any>(0);
  data = signal<EmployeeInfoDetails>({info: {
    id: 0,
    name: 'Khant Hein Htet Soe',
    role: 'Employee',
    status: 'Applied',
    phone: '0151561515',
    email: 'khant.99.kk89@gmail.com'
  }, history: []});
  showLoading: boolean = false;

  constructor(private service: EmployeeService){
    effect(() => {
      this.loadEmployeeDetailsData();
    })
  }

  loadEmployeeDetailsData(){
    this.showLoading = true
    this.service.findById(this.id()).subscribe(result => {
      this.showLoading = false;
      if(ApiResponseUtils.isSuccess(result.status)){
        this.data.set(result.payload)
      }
    })
  }

  zeroCompare() {
    return 0
  }

}

import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { WidgetsModule } from '../../../widgets/widgets-module/widgets-module.module';

@Component({
  selector: 'app-employee-add',
  standalone: true,
  imports: [ReactiveFormsModule, WidgetsModule],
  templateUrl: './employee-add.component.html',
  styles: ``
})
export class EmployeeAddComponent {

  employeeForm: FormGroup;

  constructor(){
    this.employeeForm = new FormGroup({
      name: new FormControl('', Validators.required),
      phone: new FormControl(0, [Validators.required, Validators.pattern('\d{9 | 10 | 11}')]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
      departmentId: new FormControl(0, Validators.required),
      positionId: new FormControl(0, Validators.required)
    })
  }

}

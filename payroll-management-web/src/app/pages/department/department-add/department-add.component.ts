import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { WidgetsModule } from '../../../widgets/widgets-module/widgets-module.module';
import { CommonModule } from '@angular/common';
import { DepartmentService } from '../../../services/department.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-department-add',
  standalone: true,
  imports: [ReactiveFormsModule, WidgetsModule, CommonModule],
  templateUrl: './department-add.component.html',
  styles: ``
})
export class DepartmentAddComponent {

  departmentForm: FormGroup;

  constructor(fb: FormBuilder, private service: DepartmentService, private router: Router){
    this.departmentForm = fb.group({
      code: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(3)]],
      name: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      desc: ''
    })
  }

  getControl(controlName: string){
    return this.departmentForm.controls[controlName] as FormControl
  }

  save(){
    this.service.save(this.departmentForm.value).subscribe(result => {
      if(result.status == 'SUCCESS'){
        this.router.navigate(['/department', 'list'])
      }
    })
  }

}

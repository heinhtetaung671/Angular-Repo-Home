import { Component, OnInit } from '@angular/core';
import { WidgetsModule } from '../widgets/widgets.module';
import { Category } from '../model/category';
import { CategoryService } from '../services/category.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-course-add',
  standalone: true,
  imports: [WidgetsModule, ReactiveFormsModule, FormsModule],
  templateUrl: './course-add.component.html',
  styles: ``
})
export class CourseAddComponent implements OnInit{
  
  categories!: Category[];
  myForm!: FormGroup;

  constructor(private categoryService: CategoryService){
    this.myForm = new FormGroup({
      name: new FormControl('', Validators.required),
      category:  new FormControl(0, [Validators.required, Validators.min(1)]),
      fees: new FormControl(0, [Validators.required, Validators.min(10000)]),
      duration: new FormControl(0, [Validators.required, Validators.min(1)]),
      description: new FormControl('')
    });
  }

  ngOnInit(): void {
    this.categoryService.search().subscribe(value => {
      this.categories = value.payload;
    });
  }

  checkValidOrNot(controlName: string): boolean {
    return this.myForm.get(controlName)!.valid;
  }

}

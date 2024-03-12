import { Component, OnInit } from '@angular/core';
import { WidgetsModule } from '../widgets/widgets.module';
import { Category } from '../model/category';
import { CategoryService } from '../services/category.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ServerUtilsService } from '../services/server-utils.service';
import { CommonModule } from '@angular/common';
import { CourseServiceService } from '../services/course-service.service';
import { ShowMessageData } from '../../model/show-message-data';

@Component({
  selector: 'app-course-add',
  standalone: true,
  imports: [WidgetsModule, ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './course-add.component.html',
  styles: ``
})
export class CourseAddComponent implements OnInit{
  
  categories!: Category[];
  myForm!: FormGroup;
  showMessageData: ShowMessageData = {
    show: false,
    success: false,
    message: ''
  };

  constructor(private categoryService: CategoryService, private serverUtils: ServerUtilsService, private courseService: CourseServiceService){
    this.myForm = new FormGroup({
      name: new FormControl('', Validators.required),
      categoryId:  new FormControl(0, [Validators.required, Validators.min(1)]),
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

  saveCourse(){
    this.courseService.save(this.myForm.value).subscribe(response => {
        this.showMessageData.message = response.success ? response.payload.message : 'Course cannot be Created.';
        console.log(this.showMessageData.message)
        this.showMessageData.success = response.success;
        this.showMessageData.show = true;
    })
  }

}

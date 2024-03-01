import { Component } from '@angular/core';
import { UserDataComponent } from '../user-data/user-data.component';
import { CourceInfoComponent } from '../cource-info/cource-info.component';
import { Course } from '../../model/Course';

@Component({
  selector: 'app-main-body',
  standalone: true,
  imports: [UserDataComponent, CourceInfoComponent],
  templateUrl: './main-body.component.html',
  styles: ``
})
export class MainBodyComponent {

  course1: Course = {
    id: 1,
    name: 'Java Basic',
    fees: 300000,
    discription: 'This course is for the people who are new to the Java Language.'
  }

  course2: Course = {
    id: 2,
    name: 'Spring Framework',
    fees: 600000,
    discription: 'This course is for the people who are learning to create a web page with Java Language (Spring Framework)'
  }
  
  courseTemplateClick(): void{
    console.log('Course Template Btn Click')
  }

}

import { Component } from '@angular/core';
import { UserDataComponent } from '../user-data/user-data.component';
import { CourceInfoComponent } from '../cource-info/cource-info.component';
import { Course } from '../../model/Course';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-body',
  standalone: true,
  imports: [UserDataComponent, CourceInfoComponent, CommonModule],
  templateUrl: './main-body.component.html',
  styleUrl: `./main-body.component.css`,
})
export class MainBodyComponent {
  courses: Course[] = [
    {
      id: 1,
      name: 'Java Basic',
      fees: 300000,
      category: 'BASIC',
      discription:
        'This course is for the people who are new to the Java Language.',
    },

    {
      id: 2,
      name: '',
      fees: 600000,
      category: 'INTERMEDIATE',
      discription:
        'This course is for the people who are learning to create a web page with Java Language (Spring Framework)',
    },

    {
      id: 3,
      name: 'Angular Framework',
      fees: 400000,
      category: 'INTERMEDIATE',
      discription:
        'This course is for the people who are learning front end development',
    }, {
      id: 4,
      name: 'Cloud Service',
      fees: 700000,
      category: 'ADVANCE',
      discription: 'This course is for advance programmer.'
    }
  ];

  courseTemplateClick(): void {
    console.log('Course Template Btn Click');
  }

  courseInfoCustomEventHandler(course: Course): void {
    console.log(`click custom event in ${course.name} template.`);
  }
}

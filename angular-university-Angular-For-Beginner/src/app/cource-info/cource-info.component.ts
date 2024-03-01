import { Component, EventEmitter, Input, Output, input } from '@angular/core';
import { Course } from '../../model/Course';

@Component({
  selector: 'app-cource-info',
  standalone: true,
  imports: [],
  templateUrl: './cource-info.component.html',
  styles: ``,
})
export class CourceInfoComponent {
 
  @Output()
  courseInfoEvent: EventEmitter<Course> = new EventEmitter<Course>();

  @Input({
    required: true,
  })
  course: Course = {
    id: 1,
    name: 'default',
    fees: 300000,
    discription: 'default discription',
  };
  
  @Input({
    required: true
  })
  index: number = 0;

  checkCourse(): void {
    console.log(`checked ${this.course.name}`);
  }

  courseInfo(): void {
    this.courseInfoEvent.emit(this.course);
  }

}

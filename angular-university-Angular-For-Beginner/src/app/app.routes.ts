import { Routes } from '@angular/router';
import { MainBodyComponent } from './main-body/main-body.component';
import { AngularPipeComponent } from './angular-pipe/angular-pipe.component';
import { CourseAddComponent } from './course-add/course-add.component';

export const routes: Routes = [
   {
      path: 'home',
      component: MainBodyComponent,
      title: 'Home'
   },
   {
      path: 'pipe',
      component: AngularPipeComponent,
      title: 'Angular Pipe'
   },
   {
      path: 'course',
      component: CourseAddComponent,
      title: 'Course'
   },
   {
      path: '',
      redirectTo: '/home',
      pathMatch: 'full'
   }
];

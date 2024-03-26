import { Component } from '@angular/core';
import { RouterLinkActive, RouterModule } from '@angular/router';

@Component({
  selector: 'app-department-nav',
  standalone: true,
  imports: [ RouterModule, RouterLinkActive],
  templateUrl: './department-nav.component.html',
  styles: ``
})
export class DepartmentNavComponent {

}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './mainComponents/navbar/navbar.component';
import { SideBarComponent } from './mainComponents/side-bar/side-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, SideBarComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent {
  title = 'payroll-management-web';
}

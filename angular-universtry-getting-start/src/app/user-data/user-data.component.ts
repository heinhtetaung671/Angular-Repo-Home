import { Component } from '@angular/core';

@Component({
  selector: 'app-user-data',
  standalone: true,
  imports: [],
  templateUrl: './user-data.component.html',
  styles: ``,
})
export class UserDataComponent {
  myData = {
    name: 'Hein Htet Aung',
    age: 17,
  };
}

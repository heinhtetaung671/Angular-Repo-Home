import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-angular-pipe',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './angular-pipe.component.html',
  styles: ``
})
export class AngularPipeComponent {

  text: string = 'hein htet Aung';
  num: number = 24345.23466;
  obj = {
    name: 'khant Hein htet soe',
    email: 'khant.99.kk89@gmail.com',
    age: 23
  }

}

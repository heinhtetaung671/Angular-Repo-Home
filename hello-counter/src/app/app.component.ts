import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html'
})
export class AppComponent {
  counter: number = 0 ;

  plus() {
    this.counter ++;
  }

  minus() {
    this.counter --;
  }

  reset(){
    this.counter = 0;
  }
}

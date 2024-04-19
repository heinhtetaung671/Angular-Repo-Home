import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-loading-screen',
  templateUrl: './loading-screen.component.html',
  styles: ``
})
export class LoadingScreenComponent {
  show = input.required<boolean>()
}

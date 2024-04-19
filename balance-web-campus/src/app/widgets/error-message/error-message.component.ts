import { Component, input } from '@angular/core';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styles: ``
})
export class ErrorMessageComponent {
  errorMessage = input<string>()
}

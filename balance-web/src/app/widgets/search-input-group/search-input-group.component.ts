import { Component, input } from '@angular/core';

@Component({
  selector: 'app-search-input-group',
  templateUrl: './search-input-group.component.html',
  styles: ``
})
export class SearchInputGroupComponent {

  label = input.required<string>()

}

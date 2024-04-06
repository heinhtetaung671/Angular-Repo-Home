import { Component, input } from '@angular/core';

@Component({
  selector: 'app-nav-link',
  templateUrl: './nav-link.component.html',
  styleUrl: `./nav-link.component.scss`
})
export class NavLinkComponent {

  path = input.required<string[]>();
  icon = input.required<string>();
  title = input.required<string>();
  open = input.required<boolean>();

}

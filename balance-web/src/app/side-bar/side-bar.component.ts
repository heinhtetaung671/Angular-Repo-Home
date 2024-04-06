import { CommonModule } from '@angular/common';
import { Component, input, signal } from '@angular/core';
import { WidgetsModule } from '../widgets/widgets.module';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [CommonModule, WidgetsModule],
  templateUrl: './side-bar.component.html',
  styleUrl: `./side-bar.component.scss`
})
export class SideBarComponent {

  open = signal<boolean>(true);  

  updateStatus(){
    this.open.update(open => !open)
  }
}

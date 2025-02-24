import {Component, input} from '@angular/core';
import {MyButtonConfig} from '../../config/my-button.config';


@Component({
  selector: 'my-button',
  standalone: true,
  imports: [],
  templateUrl: './my-button.component.html',
  styleUrl: './my-button.component.css',
})

export class MyButtonComponent {
  readonly buttonConfig = input<MyButtonConfig>();
}

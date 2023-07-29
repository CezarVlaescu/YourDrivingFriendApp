import { Component } from '@angular/core';
import { faCoffee, faCar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  faCoffee = faCoffee;
  faCar = faCar;
}
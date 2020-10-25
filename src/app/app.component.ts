import { Component } from '@angular/core';
import {CardService} from './card.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  constructor(
    public cardService: CardService,
  ){

  }
}

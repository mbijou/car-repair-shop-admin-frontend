import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  cardTitle;
  cardSubTitle;

  constructor() {
    this.cardTitle = null;
    this.cardSubTitle = null;
  }
}

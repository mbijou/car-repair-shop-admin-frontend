import { Component, OnInit } from '@angular/core';
import {CardService} from '../card.service';
import {NavigationStart, NavigationEnd, ActivatedRoute, Router} from '@angular/router';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(
    public cardService: CardService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    cardService.cardTitle = "Dashboard";
    cardService.cardSubTitle = null;
  }

  ngOnInit(): void {
    this.route.url.subscribe(url =>{
     console.warn("what: ", url);
    });
  }

}

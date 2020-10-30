import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../company.service';
import { Observable } from 'rxjs';
import {CardService} from '../card.service';
import {Router, NavigationStart, NavigationEnd, ActivatedRoute} from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  constructor(
    public companyService: CompanyService,
    public cardService: CardService,
    private route: ActivatedRoute,
  ) {
     cardService.cardTitle = "Firmenstammdaten";
     cardService.cardSubTitle = null;
  }

  ngOnInit() {
    this.companyService.getCompanyData().subscribe(data => {
      console.warn(data);
      this.companyService.companyData = data;
      console.warn(this.companyService.companyData);
    });

    this.route.url.subscribe(url =>{
     console.warn("what: ", url);

    });

  }

}

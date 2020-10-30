import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-topbar-navigation',
  templateUrl: './topbar-navigation.component.html',
  styleUrls: ['./topbar-navigation.component.css']
})
export class TopbarNavigationComponent implements OnInit {

  constructor(
    public companyService: CompanyService,
  ) { }

  ngOnInit(): void {
  }

}

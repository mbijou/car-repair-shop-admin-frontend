import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../company.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  constructor(
    public companyService: CompanyService,
  ) { }

  ngOnInit() {
    this.companyService.getCompanyData().subscribe(data => {
      console.warn(data);
      this.companyService.companyData = data;
      console.warn(this.companyService.companyData);
    });
  }

}

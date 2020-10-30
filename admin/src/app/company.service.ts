import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  companyData: any;

  constructor(
    private http: HttpClient,
  ) { }

  getCompanyData(){
    // return this.http.get('http://127.0.0.1:8000/api/company/').subscribe(data => {
    //   console.log(data);
    // });
    return this.http.get('api/company/');
  }

  getCompanyOptions(){
    // return this.http.get('http://127.0.0.1:8000/api/company').subscribe(data => {
    //   console.log(data);
    // });
    return this.http.options('api/company/');
    // return this.http.options('api/company/').toPromise().then(data => {//javascript Anweisungen});
  }

  saveCompany(formData, companyForm): any {
      console.warn("blabla", formData);
      console.warn(companyForm.controls["name"].invalid);
      console.warn(companyForm.status);
      if(companyForm.status == "VALID"){
        console.warn(formData);
        return this.http.post('api/company/', formData);
      }
  }

}

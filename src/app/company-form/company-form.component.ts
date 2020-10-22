import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from "@angular/forms";

import { CompanyService } from '../company.service';
import {hasOwnProperty} from 'tslint/lib/utils';

@Component({
  selector: 'app-company-form',
  templateUrl: './company-form.component.html',
  styleUrls: ['./company-form.component.css'],
})

export class CompanyFormComponent implements OnInit {
  companyForm;
  fields;
  error;

  constructor(
    public companyService: CompanyService,
    private formBuilder: FormBuilder
  ) {
    companyService.getCompanyOptions().subscribe(data => {
      this.setFields(data);

      let formJSON = CompanyFormComponent.buildFormJSON(this.fields);

      console.warn("hey", formJSON);

      this.companyForm = this.formBuilder.group(
        formJSON,
      );

    });
  }

  ngOnInit(): void {
    console.warn(this.fields);
  }

  setFields(data){
      this.fields = data["actions"]["POST"];
      console.warn(this.fields);
  }

  static buildFormJSON(fields): object{
      let formJSON = {};

      for(let field in fields){
        if (fields.hasOwnProperty(field)) {
          formJSON[field] = new FormControl(field, [/*Validators.required*/]);
        }
      }
      return formJSON;
  }

  onSubmit(formData, companyForm, companyService) {
    let observable = companyService.saveCompany(formData, companyForm);

    if(observable){
      observable.subscribe(result => {
        this.error = null;
        companyService.getCompanyData().subscribe(
          data => {
            companyService.companyData = data;
          }
        );
      },
      error => {
        // this.handleSubmitError(error.error);
        this.error = error.error;
      });
    }
  }

  /*
  handleSubmitError(error): void {
    console.warn(error);

    for(let field in error){
      if(error.hasOwnProperty(field)){
        let fieldErrorMessages = error[field];
        console.warn(fieldErrorMessages);
      }
    }
  }
  */

}

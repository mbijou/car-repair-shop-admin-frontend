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
    this.companyService.getCompanyData().subscribe(data => {
      this.companyService.companyData = data;

      companyService.getCompanyOptions().subscribe(data => {
        this.setFields(data);

        let formControls = this.buildFormControls();

        this.setFormControlsInitialValues(formControls, companyService.companyData);

        this.companyForm = this.formBuilder.group(
          formControls,
        );

      });

    });
  }

  ngOnInit(): void {
    console.warn(this.fields);
  }

  setFields(data){
      this.fields = data["actions"]["POST"];
      console.warn(this.fields);
  }

  buildFormControls(): object{
      let formControls = {};
      let formControl;

      for(let field in this.fields){
        if (this.fields.hasOwnProperty(field)) {
          formControl = new FormControl(field, [/*Validators.required*/]);
          formControls[field] = formControl;
          formControl.setValue(null);
        }
      }

      return formControls;
  }

  setFormControlsInitialValues(formControls, companyData){
      let formControl;
      for(let field in this.fields){
        if (this.fields.hasOwnProperty(field)) {
          formControl = formControls[field];
          if(companyData.hasOwnProperty(field)){
            console.warn("bro", companyData);
            formControl.setValue(companyData[field]);
          }
        }
      }
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

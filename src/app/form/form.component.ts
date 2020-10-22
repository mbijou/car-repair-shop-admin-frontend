import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Input() form;
  @Input() onSubmit;
  @Input() fields;
  @Input() service;
  // @Input() handleSubmitError;
  @Input() error;


  constructor() { }

  ngOnInit(): void {
  }

}

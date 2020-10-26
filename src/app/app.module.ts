import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CompanyComponent } from './company/company.component';
import { CompanyFormComponent } from './company-form/company-form.component';
import { FormComponent } from './form/form.component';
import { SidebarNavigationComponent } from './sidebar-navigation/sidebar-navigation.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TopbarNavigationComponent } from './topbar-navigation/topbar-navigation.component';
import * as angularJSON from '../../angular.json';


@NgModule({
  declarations: [
    AppComponent,
    CompanyComponent,
    CompanyFormComponent,
    FormComponent,
    SidebarNavigationComponent,
    DashboardComponent,
    TopbarNavigationComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: DashboardComponent},
      { path: 'company', component: CompanyComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

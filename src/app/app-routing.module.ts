import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { CountryComponent } from './country/country/country.component';
import { PersonComponent } from './person/person/person.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes : Routes = [
//{path: '',redirectTo: '/country',pathMatch: 'full'},
{path: '',redirectTo: '',pathMatch: 'full'},
{path:'**',component:PageNotFoundComponent}];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  declarations: []
})
export class AppRoutingModule { 
  constructor(){
    console.log("--App Routing module --");
  }
}

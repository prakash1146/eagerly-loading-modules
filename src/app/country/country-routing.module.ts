import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountryComponent } from './country/country.component';
import { CountryListComponent } from './country-list/country-list.component';

const routes: Routes = [{path: '',redirectTo: 'country',pathMatch: 'full'},{path:'country',component:CountryComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountryRoutingModule {
  constructor(){
    console.log("--Country routing module --");
  }
 }

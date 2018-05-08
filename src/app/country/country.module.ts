import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountryRoutingModule } from './country-routing.module';
import { CountryComponent } from './country/country.component';
import { CountryListComponent } from './country-list/country-list.component';


@NgModule({
  imports: [
    CommonModule,
    CountryRoutingModule
  ],
  declarations: [CountryComponent, CountryListComponent]
})
export class CountryModule { 
  constructor(){
    console.log("--Country Main module --");
  }
}

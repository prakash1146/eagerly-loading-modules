import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CountryModule } from './country/country.module';
import { PersonModule } from './person/person.module';

@NgModule({
  declarations: [
    AppComponent,
   
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    CountryModule,
    PersonModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){
    console.log("--App Main module --");
  }
 }

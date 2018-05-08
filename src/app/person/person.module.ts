import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonRoutingModule } from './person-routing.module';
import { PersonComponent } from './person/person.component';
import { PersonListComponent } from './person-list/person-list.component';

@NgModule({
  imports: [
    CommonModule,
    PersonRoutingModule
  ],
  declarations: [PersonComponent, PersonListComponent]
})
export class PersonModule { 
  constructor(){
    console.log("--Person Main module --");
  }
}

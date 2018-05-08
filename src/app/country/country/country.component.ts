import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-country',
  template: `
    <h1>This is country page</h1>
    <div>Click below for country List</div>
  `,
  styles: []
})
export class CountryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

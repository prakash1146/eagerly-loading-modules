import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person',
  template: `
    <h1>This is person page</h1>
    <div>Click below for person List</div>
  `,
  styles: []
})
export class PersonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

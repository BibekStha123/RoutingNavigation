import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
    <p [class]="'error'">
      page-not-found works!
    </p>
  `,
  styles: [
    `
    .error{
      color: red;
    }
    `
  ]
})
export class PageNotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

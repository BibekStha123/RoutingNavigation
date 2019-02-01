import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
//import { Subscription } from 'rxjs';
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  param: any;
  constructor(private _route: ActivatedRoute) { }

  ngOnInit() {
    this.param = (<Params>this._route.snapshot.params).action;

    this._route.params.subscribe(
      (data)=>{
        this.param=data;
      }
    )
  }


}

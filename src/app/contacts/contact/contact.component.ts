import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
//import { Subscription } from 'rxjs';
import { HomeService } from '../../home/home.service'; 

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private _route: ActivatedRoute, 
              private _service: HomeService,
              private _router: Router) { }

  param : any;
  contacts: any;

  ngOnInit() {
    //this.param=this._route.snapshot.params.action;
     this._route.params
                  .subscribe(
                    (data)=>{
                      this.param =data.action;
                    }
                  );

     this._service.getDataFromService()
     .subscribe(
       (data)=>{
          this.contacts=data;
       }
     )
  }

  onSave(frm : NgForm){
    //console.log(frm);
    this._service.postData(frm)
    .subscribe(
      (data)=>{
        //alert(data);
        this.contacts=data;
        this._router.navigate(['/contacts/contact','List']);
      }
    )
  }



}

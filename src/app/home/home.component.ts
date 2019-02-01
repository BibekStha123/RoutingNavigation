import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service'; 
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  contacts: any;

  constructor(private _homeservice: HomeService, private _router: Router) { }

  ngOnInit() {
   // console.log(this._homeservice.getDataFromService());
    this.contacts = this._homeservice.getDataFromService()
    .subscribe(
      (data)=>{
        console.log(data);
        this.contacts=data;
      },
      (err)=>{
        console.log(err);
      }
    )
  }

  onDelete(id){
      return this._homeservice.deleteData(id)
      .subscribe(
       function(err){
          console.log(err)
        },
       function(data){
        this.contacts=data;
        //this._router.navigate(['/']);
       } 
      )
  }

}

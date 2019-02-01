import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators'; 

@Injectable()
export class HomeService {

  /* private obj = [
    {
      sno: 1,
      name:"suman"
    },
    {
      sno: 2,
      name:"andres"
    } 
  ];*/
 
  constructor(private _http : HttpClient) { }

  getDataFromService(){
   // return this.obj;
     return this._http.get("http://localhost:3000/api/json")
     .pipe(map(data=>data));
  }

  postData(obj){
    return this._http.post("http://localhost:3000/api/post", obj)
    .pipe(map(res => res));
  }


  deleteData(id){
    return this._http.delete("http://localhost:3000/api/delete/"+id)
    .pipe(map(data=>data));
  }
}
 
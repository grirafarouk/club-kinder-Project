import { owner } from './models/owner';
import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable,of, observable, from, BehaviorSubject } from 'rxjs';

import { HttpModule, Http } from '@angular/http';
import { produit } from './models/produit';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpp:Http  ,private httpClient: HttpClient) 
  
  { 

  }
   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      })
  };
  
  httpOptions2 = null
  baseurl="http://localhost:8000/owner/getAll";
  public getAll(): Observable<any> {
    
  return this.httpp.post("http://localhost:8000/club/getAll",this.httpOptions2);
}

public getAl2l() {
  let list = []
 return  fetch("http://localhost:8000/owner/getAll").then(result=>result.json())
 


}
public ajout(o:produit){
var data = {
  "email": o.email + "@gmail.com",
  "password": o.password,
  "first_name": o.first_name,
  "last_name": o.last_name,
  "createdAt":null
};


fetch('http://localhost:8000/owner/new', {
  method: 'POST', // or 'PUT'

  body: JSON.stringify(data),
})
.then(response => response.json())
.then(data => {
  console.log('Success:', data);
})
.catch((error) => {
  console.error('Error:', error);
});}
public ss(): Observable<any> {
  let a :owner =  new owner() ; 
return this.httpClient.post(this.baseurl+"/new",a,this.httpOptions);

}
  public save(utilisateur): Observable<any> {
      return this.httpClient.post(this.baseurl+"/add", utilisateur, this.httpOptions);
  }

  public update(utilisateur): Observable<any> {
      return this.httpClient.put(this.baseurl+"/edit", utilisateur, this.httpOptions);
  }


  public searchuser(name: any): Observable<any> {
    return this.httpClient.get(this.baseurl+"/search/" + name)


  }
  delete(user): Observable<any> {

    return this.httpClient.delete(this.baseurl+"/delete/"+user.users_id );
  }

}

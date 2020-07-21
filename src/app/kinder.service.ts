import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { produit } from './models/produit';
import { kindergarten } from './models/kindergarten';

@Injectable({
  providedIn: 'root'
})
export class kinderService {

  constructor(private httpClient: HttpClient) 
  
  { 

  }
   httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
  };
  baseurl="http://localhost:8584/kinder";
  public getAll(): Observable<any> {
  return this.httpClient.get(this.baseurl+"/all");
  }
  public getAl2l() {
    let list = []
   return  fetch("http://localhost:8000/kindergarten/getAll").then(result=>result.json())
   
  
  
  }
  public ajout(o:kindergarten){
    console.log(o)
  var data = {
    "documentEvidenceTva":"test",
    "name": o.name,
    "ratingNote": 96,
    "description": o.description,
    "avalability":45,
    "address": o.address,
    "tags": o.tags,
    "capacity": o.capacity,
    "nb_children_registered":78
        };
  
  
  fetch('http://localhost:8000/kindergarten/new?authorization=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MiwiZW1haWwiOiJoYXRlbUBoYXRlbS5jb20iLCJmaXJzdF9uYW1lIjoiYWFhYWFhYSIsImxhc3RfbmFtZSI6ImFhYSIsImlhdCI6MTU5NDkzMDMwNiwiZXhwIjoxNTk1NTM1MTA2fQ.12nMm-DKchLz-UxZcneGScIPZXbSG9YbbkYGY0JE-Qk', {
    method: 'POST', 
  
    body: JSON.stringify(data),
  })
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });}
  
  
deletekinder(id:number){


  fetch('http://localhost:8000/kindergarten/delete?authorization=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MiwiZW1haWwiOiJoYXRlbUBoYXRlbS5jb20iLCJmaXJzdF9uYW1lIjoiYWFhYWFhYSIsImxhc3RfbmFtZSI6ImFhYSIsImlhdCI6MTU5NDkzMDMwNiwiZXhwIjoxNTk1NTM1MTA2fQ.12nMm-DKchLz-UxZcneGScIPZXbSG9YbbkYGY0JE-Qk&id_kindergarten='+id, {
    method: 'POST', 
  })
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });}
 
  public save(kinder): Observable<any> {
      return this.httpClient.post(this.baseurl+"/add", kinder, this.httpOptions);
  }

  public update(kinder): Observable<any> {
      return this.httpClient.put(this.baseurl+"/edit", kinder, this.httpOptions);
  }



  delete(kinder): Observable<any> {

    return this.httpClient.delete(this.baseurl+"/delete/"+kinder.id_kinder );
  }
  public searchkinder(name: any): Observable<any> {
    return this.httpClient.get(this.baseurl+"/search/" + name)


  }
}

import { Injectable } from '@angular/core';
import { club } from './models/club';

@Injectable({
  providedIn: 'root'
})
export class ClubService {

  constructor() { }


  public getAl2l() {
    let list = []
   return  fetch("http://localhost:8000/club/getAll").then(result=>result.json())
   
  
  
  }
  public ajout(o:club){
    console.log(o)
  var data = {
    
      "title": o.title,
      "description": o.description,
      "createdDate": null,
        "kindergarten":null,
      "kinder_garten_id":2
        };
  
  
  fetch('http://localhost:8000/club/new?authorization=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MiwiZW1haWwiOiJoYXRlbUBoYXRlbS5jb20iLCJmaXJzdF9uYW1lIjoiYWFhYWFhYSIsImxhc3RfbmFtZSI6ImFhYSIsImlhdCI6MTU5NDkzMDMwNiwiZXhwIjoxNTk1NTM1MTA2fQ.12nMm-DKchLz-UxZcneGScIPZXbSG9YbbkYGY0JE-Qk', {
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
  
  
deleteclub(id:number){


  fetch('http://localhost:8000/club/delete?authorization=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MiwiZW1haWwiOiJoYXRlbUBoYXRlbS5jb20iLCJmaXJzdF9uYW1lIjoiYWFhYWFhYSIsImxhc3RfbmFtZSI6ImFhYSIsImlhdCI6MTU5NDkzMDMwNiwiZXhwIjoxNTk1NTM1MTA2fQ.12nMm-DKchLz-UxZcneGScIPZXbSG9YbbkYGY0JE-Qk&id_club='+id, {
    method: 'POST', 
  })
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });}
 
  
}

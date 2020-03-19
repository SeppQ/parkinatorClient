import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Users } from './DTO/Users';
import { Login } from './DTO/Login';
import { Car } from './DTO/Car';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  user: Users;
  cars: Car[] = [];
  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'text/plain'
    })
  };
  private loggedInStatus =  JSON.parse(localStorage.getItem('loggedIn') || 'false');

  setLoggedIn(value : boolean){
    this.loggedInStatus = value;
    sessionStorage.setItem('loggedIn','true');
  }

  get isLoggedIn(){
    return JSON.parse(sessionStorage.getItem('loggedIn') || this.loggedInStatus.toString());
  }
  url : string = "http://localhost:41919/parkinator/webresources/";
  


  
  

}

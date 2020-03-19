import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { HttpClient } from '@angular/common/http';
import { Login } from './DTO/Login';
import { Users } from './DTO/Users';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsDataService {

  constructor(private auth : AuthenticationService, private http: HttpClient) { }

  userDetailsUrl : string = this.auth.url + "UserDetails";

  getUserDetails(email :Login){
    let jsonstr = JSON.stringify(email);
    return this.http.post<Users[]>(this.userDetailsUrl,jsonstr,this.auth.httpOptions);
  }
}

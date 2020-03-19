import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { HttpClient } from '@angular/common/http';
import { Login } from './DTO/Login';
import { User } from './DTO/User';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsDataService {

  constructor(private auth : AuthenticationService, private http: HttpClient) { }

  userDetailsUrl : string = this.auth.url + "UserDetails";

  getUserDetails(email :Login){
    let jsonstr = JSON.stringify(email);
    return this.http.post<User[]>(this.userDetailsUrl,jsonstr,this.auth.httpOptions);
  }
}

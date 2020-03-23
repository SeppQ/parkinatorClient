import { Injectable } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { HttpClient } from '@angular/common/http';
import { Login } from 'src/app/DTO/Login';
import { User } from 'src/app/DTO/User';

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

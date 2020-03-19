import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { HttpClient } from '@angular/common/http';
import { Login } from './DTO/Login';

@Injectable({
  providedIn: 'root'
})
export class LoginDataService {

  constructor(private auth : AuthenticationService, private http: HttpClient) { }

  loginUrl: string = this.auth.url + "Login";

  getUserLogin(login: Login) {
    let jsonstr = JSON.stringify(login);

    return this.http.post(this.loginUrl,jsonstr,this.auth.httpOptions);
  }
}

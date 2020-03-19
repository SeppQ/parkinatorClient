import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { HttpClient } from '@angular/common/http';
import { User } from './DTO/User';

@Injectable({
  providedIn: 'root'
})
export class PasswordRecoveryDataService {

  constructor(private auth : AuthenticationService, private http: HttpClient) { }

  passwordRecoveryUrl: string = this.auth.url + "RecoveryPassword";
 
  checkQuestionAnswer(user : User){
    let jsonstr = JSON.stringify(user);
    return this.http.post(this.passwordRecoveryUrl,jsonstr,this.auth.httpOptions);
  }
  UpdatePassword(user : User){
    let jsonstr = JSON.stringify(user);
    return this.http.put(this.passwordRecoveryUrl,jsonstr,this.auth.httpOptions);
  }
}

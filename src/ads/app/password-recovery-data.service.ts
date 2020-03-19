import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { HttpClient } from '@angular/common/http';
import { Users } from './DTO/Users';

@Injectable({
  providedIn: 'root'
})
export class PasswordRecoveryDataService {

  constructor(private auth : AuthenticationService, private http: HttpClient) { }

  passwordRecoveryUrl: string = this.auth.url + "RecoveryPassword";
 
  checkQuestionAnswer(user : Users){
    let jsonstr = JSON.stringify(user);
    return this.http.post(this.passwordRecoveryUrl,jsonstr,this.auth.httpOptions);
  }
  UpdatePassword(user : Users){
    let jsonstr = JSON.stringify(user);
    return this.http.put(this.passwordRecoveryUrl,jsonstr,this.auth.httpOptions);
  }
}

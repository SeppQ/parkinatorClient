import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { HttpClient } from '@angular/common/http';
import { Login } from './DTO/Login';

@Injectable({
  providedIn: 'root'
})
export class RecoveryDataService {

  constructor(private auth : AuthenticationService, private http: HttpClient) { }

  recoveryUrl: string = this.auth.url + "Recovery";

  checkEmail(email : Login){
    let jsonstr = JSON.stringify(email);
    return this.http.post(this.recoveryUrl,jsonstr,this.auth.httpOptions)
    }
}

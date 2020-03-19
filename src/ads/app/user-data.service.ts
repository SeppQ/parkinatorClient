import { Injectable } from '@angular/core';
import { Users } from './DTO/Users';
import { AuthenticationService } from './authentication.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(private auth : AuthenticationService, private http: HttpClient) { }

  userUrl : string = this.auth.url + "user/";

  createUser(user : Users) {
    let jsonstr = JSON.stringify(user);
    return this.http.post(this.userUrl,jsonstr,this.auth.httpOptions);
  }
  readUser(): Observable<Users[]>{
    return this.http.get<Users[]>(this.userUrl, this.auth.httpOptions);
  }
  updateUser(user:Users){
    let jsonstr = JSON.stringify(user);
    return this.http.put(this.userUrl,jsonstr,this.auth.httpOptions);
  }
  deleteUser(user: Users){
    let jsonstr = JSON.stringify(user);
    return this.http.post(this.userUrl+"delete/",jsonstr,this.auth.httpOptions);
  }
}

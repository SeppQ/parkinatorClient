import { Injectable } from '@angular/core';
import { User } from 'src/app/DTO/User';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(private auth : AuthenticationService, private http: HttpClient) { }

  userUrl : string = this.auth.url + "user/";
  userDeleteUrl : string = this.auth.url+"Admin/";

  createUser(user : User) {
    let jsonstr = JSON.stringify(user);

    return this.http.post<User>(this.userUrl,jsonstr,this.auth.httpOptions);
  }
  readUser(): Observable<User[]>{
    return this.http.get<User[]>(this.userUrl, this.auth.httpOptions);
  }
  updateUser(user:User){
    let jsonstr = JSON.stringify(user);

    return this.http.put(this.userUrl,jsonstr,this.auth.httpOptions);
  }
  deleteUser(userid: number){
    let jsonstr = '{"user_id":'+userid+'}';
    console.log(jsonstr);
    return this.http.post(this.userDeleteUrl,jsonstr,this.auth.httpOptions).subscribe();
  }
}

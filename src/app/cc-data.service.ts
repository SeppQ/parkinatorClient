import { Injectable } from '@angular/core';
import { Cc } from './DTO/Cc';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CcDataService {

  constructor(private auth : AuthenticationService, private http: HttpClient) { }

  ccUrl : string = this.auth.url + "cc/";
  ccDeleteUrl : string = this.auth.url+"cc/delete";

  createCc(cc : Cc) {
    let jsonstr = JSON.stringify(cc);
    return this.http.post(this.ccUrl,jsonstr,this.auth.httpOptions);
  }
  readCc(): Observable<Cc[]>{
    return this.http.get<Cc[]>(this.ccUrl, this.auth.httpOptions);
  }
  updateCc(cc:Cc){
    let jsonstr = JSON.stringify(cc);
    console.log(jsonstr);
    return this.http.put(this.ccUrl,jsonstr,this.auth.httpOptions).subscribe();
  }
  deleteCc(ccid: number){
    let jsonstr = '{"cc_id":'+ccid+'}';
    return this.http.post(this.ccDeleteUrl,jsonstr,this.auth.httpOptions).subscribe();
  }
}

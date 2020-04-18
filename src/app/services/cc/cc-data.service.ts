import { Injectable } from '@angular/core';
import { Cc } from '../../DTO/Cc';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../authentication/authentication.service';
import { HttpClient } from '@angular/common/http';
import { BookingDetails } from 'src/app/DTO/BookingDetails';
import { ServerMsg } from 'src/app/DTO/ServerMsg';

@Injectable({
  providedIn: 'root'
})
export class CcDataService {

  constructor(private auth : AuthenticationService, private http: HttpClient) { }

  ccUrl : string = this.auth.url + "cc/";
  ccDeleteUrl : string = this.auth.url+"cc/delete";
  regZoneUrl : string = this.auth.url + "cc/getCarReg/";
  allRegZoneUrl : string = this.auth.url + "cc/getAllCarRegFromAllZones/";
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
  
  getZoneReg( zoneid : number ){
    let jsonstr = '{"zone_id":' + zoneid + ',"user_id": 12,"book_from":"2020-04-24","book_to":"2020-04-24","car_id":2}';
    return this.http.post(this.regZoneUrl,jsonstr,this.auth.httpOptions);
  }
  getAllRegsFromZones() : Observable<ServerMsg>{
    return this.http.get<ServerMsg>(this.allRegZoneUrl,this.auth.httpOptions);
  }  
}

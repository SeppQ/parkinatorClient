import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication/authentication.service';
import { HttpClient } from '@angular/common/http';
import { Zone } from '../DTO/Zone';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ZoneService {

  constructor(private auth : AuthenticationService, private http: HttpClient) { }
  zoneUrl: string = this.auth.url + "zone";

  addZone(zone : Zone){
    let jsonstr = JSON.stringify(zone);
    console.log(jsonstr);
    return this.http.post(this.zoneUrl,jsonstr,this.auth.httpOptions);
  }
  getZones(): Observable<Zone[]>{
    return this.http.get<Zone[]>(this.zoneUrl, this.auth.httpOptions);
  }  
}

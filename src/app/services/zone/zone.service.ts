import { Injectable } from '@angular/core';
import { AuthenticationService } from '../authentication/authentication.service';
import { HttpClient } from '@angular/common/http';
import { Zone } from '../../DTO/Zone';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ZoneService {

  constructor(private auth : AuthenticationService, private http: HttpClient) { }
  zoneUrl: string = this.auth.url + "zone/getZones/";
  allZoneUrl : string = this.auth.url + "zone/";
  removeZoneUrl : string = this.auth.url + "zone/removeZone/";
  
  jsonId : string;
  addZone(zone : Zone){
    let jsonstr = JSON.stringify(zone);
    console.log(jsonstr);
    return this.http.post(this.allZoneUrl,jsonstr,this.auth.httpOptions);
  }
  getZones(id : string): Observable<Zone[]>{
    this.jsonId =  '{"lot_id" : ' + id  + '}'
    return this.http.post<Zone[]>(this.zoneUrl,this.jsonId, this.auth.httpOptions);
  }  
  getAllZones(): Observable<Zone[]>{
    return this.http.get<Zone[]>(this.allZoneUrl, this.auth.httpOptions);
  }  
  removeZone(zone : Zone){
    let jsonstr = JSON.stringify(zone);
    return this.http.post(this.removeZoneUrl,jsonstr, this.auth.httpOptions);
  }
  updateZone(zone : Zone){
    let jsonstr = JSON.stringify(zone);
    console.log(jsonstr);
    return this.http.put(this.allZoneUrl,jsonstr, this.auth.httpOptions);
  }  

}

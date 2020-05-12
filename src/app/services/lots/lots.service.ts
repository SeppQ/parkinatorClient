import { Injectable } from '@angular/core';
import { AuthenticationService } from '../authentication/authentication.service';
import { HttpClient } from '@angular/common/http';
import { Lots } from '../../DTO/Lots';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LotsService {
  lot: Lots;
  constructor(private auth : AuthenticationService, private http: HttpClient) { }

  LotUrl: string = this.auth.url + "lots";
  removeLotUrl: string = this.auth.url + "lots/removeLots/";
  LotsByCountyUrl: string = this.auth.url + "lots/getLotsByCounty/";
  getLotsByUserUrl: string = this.auth.url + "lots/getLotsByUser/";
  
  addCarParkLot(lot: Lots) {
    let jsonstr = JSON.stringify(lot);

    return this.http.post(this.LotUrl,jsonstr,this.auth.httpOptions);
  }

  getCarParkLots(): Observable<Lots[]>{
    return this.http.get<Lots[]>(this.LotUrl, this.auth.httpOptions);
  }  

  getCarParkLotsByUser(userId : number): Observable<Lots[]>{
    let jsonstr = '{"user_id":'+ userId + '}';
    return this.http.post<Lots[]>(this.getLotsByUserUrl,jsonstr,this.auth.httpOptions);
  }  

  removeLot(lot: Lots) {
    let jsonstr = JSON.stringify(lot);
    return this.http.post(this.removeLotUrl,jsonstr,this.auth.httpOptions);
  }
  getLotsByCounty(lot : Lots): Observable<Lots[]>{
    let jsonstr = JSON.stringify(lot);

    return this.http.post<Lots[]>(this.LotsByCountyUrl,jsonstr, this.auth.httpOptions);
  }   
}

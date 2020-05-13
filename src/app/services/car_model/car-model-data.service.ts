import { Injectable } from '@angular/core';
import { AuthenticationService } from '../authentication/authentication.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Car_Model } from 'src/app/DTO/Car_Model';

@Injectable({
  providedIn: 'root'
})
export class CarModelDataService {

  constructor(private auth : AuthenticationService, private http: HttpClient) { }

  url : string = this.auth.url + "car_model";
  url2 : string = this.auth.url + "car_model/GetById/";
  jsonId : string;

  getAllCarModels() : Observable<Car_Model[]>{
    return this.http.get<Car_Model[]>(this.url,this.auth.httpOptions);
    
  }

  getCarModelsById(id : number): Observable<Car_Model[]>{
    this.jsonId =  '{"car_make_id" : ' + id  + '}'
    return this.http.post<Car_Model[]>(this.url2,this.jsonId, this.auth.httpOptions);
}



}
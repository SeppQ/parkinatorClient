import { Injectable } from '@angular/core';
import { AuthenticationService } from '../authentication/authentication.service';
import { HttpClient } from '@angular/common/http';
import { Car_Make } from 'src/app/DTO/Car_Make';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarMakeDataService {

  constructor(private auth : AuthenticationService, private http: HttpClient) { }

  url : string = this.auth.url + "car_make";

  getAllCarMakes() : Observable<Car_Make[]>{
    return this.http.get<Car_Make[]>(this.url,this.auth.httpOptions);
    
  }
}

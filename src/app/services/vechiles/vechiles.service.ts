import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VehicleMake } from 'src/app/DTO/VehicleMake';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from '../authentication/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class VechilesService {


  constructor(private auth : AuthenticationService, private http: HttpClient) { }
  url : string = "https://vpic.nhtsa.dot.gov/api/vehicles/getallmakes?format=json";
  getUserCars() : Observable<VehicleMake[]>{
    return this.http.get<VehicleMake[]>(this.url,this.auth.httpOptions);
  }
}

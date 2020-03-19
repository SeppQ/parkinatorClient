import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { Car } from './DTO/Car';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserCarDataService {

  

  constructor(private auth : AuthenticationService, private http: HttpClient) { }


  cars: Car[] = [];
  url : string = this.auth.url + "userCar";

  getUserCars(user_id : number) : Observable<Car[]>{
    let jsonstr = '{"user_id":'+user_id+'}';
    console.log(jsonstr);
    return this.http.post<Car[]>(this.url,jsonstr,this.auth.httpOptions);
  }

  removeCar(car : Car)
  {
    let jsonStr = JSON.stringify(car);
    console.log(jsonStr);
    this.http.put(this.url, jsonStr, this.auth.httpOptions ).subscribe();
    window.location.reload();
  }

  updateCar(car : Car)
  {
    let jsonStr = JSON.stringify(car);
    console.log(jsonStr);
    this.http.put(this.url, jsonStr, this.auth.httpOptions ).subscribe();
  }



}

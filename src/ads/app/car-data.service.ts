import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { HttpClient } from '@angular/common/http';
import { UserCarDataService } from './userCar-data.service';
import { Car } from './DTO/Car';

@Injectable({
  providedIn: 'root'
})
export class CarDataService {

  constructor(private auth : AuthenticationService, private http: HttpClient, private ucdService : UserCarDataService) { }

  url : string = this.auth.url + "car";


  newCar(car : Car)
  {
    let jsonStr = JSON.stringify(car);
    console.log(jsonStr);
    this.http.post<Car>(this.url, jsonStr, this.auth.httpOptions ).subscribe( data=>
      {
        this.ucdService.cars.push(data);
      },
      err=>console.log("Error in car-data.service.newCar()", err));
      //window.location.reload();
  }

  removeCar(car : Car)
  {
    let jsonStr = JSON.stringify(car);
    console.log(jsonStr.toString());
    this.http.put(this.url+"/delete/", jsonStr, this.auth.httpOptions ).subscribe();
    
  }

  updateCar(car : Car)
  {
    let jsonStr = JSON.stringify(car);
    console.log(jsonStr.toString());
    this.http.put(this.url+"/update/", jsonStr, this.auth.httpOptions ).subscribe();

  }
}


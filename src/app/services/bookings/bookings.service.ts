import { Injectable } from '@angular/core';
import { AuthenticationService } from '../authentication/authentication.service';
import { HttpClient } from '@angular/common/http';
import { ParkedCars } from '../../DTO/ParkedCars';
import { User } from '../../DTO/User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingsService {

  constructor(private auth : AuthenticationService, private http: HttpClient) { }

  bookingsUrl: string = this.auth.url + "bookings";
  displayBookingsUrl: string = this.auth.url + "bookings/displayBookings/";
  
  addBooking(pc: ParkedCars) {
    let jsonstr = JSON.stringify(pc);
    console.log(jsonstr);
    return this.http.post<ParkedCars>(this.bookingsUrl,jsonstr,this.auth.httpOptions);
  }
  displayBookings(user: User) : Observable<ParkedCars[]>{
    let jsonstr = JSON.stringify(user);
    console.log(jsonstr);
    return this.http.post<ParkedCars[]>(this.displayBookingsUrl,jsonstr,this.auth.httpOptions);
  }

}

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
  deleteBookingUrl : string = this.auth.url+ "bookings/deleteBookings/";
  updateBookingUrl : string = this.auth.url+ "bookings";
  checkBookingUrl : string = this.auth.url+ "bookings/checkBooking/";
  
  addBooking(pc: ParkedCars) {
    let jsonstr = JSON.stringify(pc);
    return this.http.post<ParkedCars>(this.bookingsUrl,jsonstr,this.auth.httpOptions);
  }
  displayBookings(user: User) : Observable<ParkedCars[]>{
    let jsonstr = JSON.stringify(user);
    return this.http.post<ParkedCars[]>(this.displayBookingsUrl,jsonstr,this.auth.httpOptions);
  }
  getAllBookings() : Observable<ParkedCars[]>{
    return this.http.get<ParkedCars[]>(this.bookingsUrl,this.auth.httpOptions);
  }  
  deleteBookings(booking : ParkedCars){
    let jsonstr = JSON.stringify(booking);
    return this.http.post(this.deleteBookingUrl,jsonstr,this.auth.httpOptions);
  }
  updateBookings(userid : number , zoneid : number , carid : number){
    let jsonstr = '{"zone_id":' + zoneid + ',"user_id":' + userid + ',"book_from":"2020-04-24","book_to":"2020-04-24","car_id":'+ carid +'}';
    return this.http.put(this.updateBookingUrl,jsonstr,this.auth.httpOptions);
  }

  checkBooking(pc : ParkedCars){
    let jsonstr = JSON.stringify(pc);
    return this.http.post(this.checkBookingUrl,jsonstr,this.auth.httpOptions);
  }
}

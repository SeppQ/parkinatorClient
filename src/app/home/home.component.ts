import { Component, OnInit } from '@angular/core';
import { LotsService } from '../services/lots/lots.service';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication/authentication.service';
import { Lots } from '../DTO/Lots';
import { ZoneService } from '../services/zone/zone.service';
import { Zone } from '../DTO/Zone';
import { User } from '../DTO/User';
import { CarDetailsComponent } from 'src/app/car-details/car-details.component';
import { UserCarDataService } from 'src/app/services/user/userCar-data.service';
import { Car } from '../DTO/Car';
import { ParkedCars } from '../DTO/ParkedCars';
import { ServerMsg } from '../DTO/ServerMsg';
import { BookingsService } from '../services/bookings/bookings.service';
import { formatDate } from '@angular/common';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private auth: AuthenticationService, private rout: Router, private lotservice: LotsService, private zoneservice: ZoneService, private cdservice: UserCarDataService, private bookingsService: BookingsService) { }
  lots: Lots[] = [];
  zones: Zone[] = [];
  cars: Car[] = [];
  zoneSets: boolean = true;
  userDetails: User;
  errorMsg: String = null;
  pc: ParkedCars;
  msg: ServerMsg;
  zoneNameId: string;
  carRegId: string;
  bookTo: string;
  zoneId: number;
  carId: number;
  parkedCars: ParkedCars[] =  null;
  butDisabled: boolean = true;
  myDate = new Date();
  minDate: string;
  rl:number = 0;
  latitude:number;
  longitude:number;
  updateCar_zone_id : number;
  updateCar_user_id : number;
  updateCar_car_id: number;
  ngOnInit() {


    this.onPageLoad();


  }

  addBooking() {
    this.zones.forEach(element => {
      if (element.zone_name == this.zoneNameId) {
        this.zoneId = element.zone_id;

      }
    });
    this.cars.forEach(element => {
      if (element.car_reg == this.carRegId) {
        this.carId = element.car_id;
      }
    });


    event.preventDefault;
    this.pc = (new ParkedCars(this.zoneId, this.carId, this.bookTo, this.bookTo, this.userDetails.user_id));
    this.bookingsService.addBooking(this.pc).subscribe(data => {
      this.msg = <ServerMsg>JSON.parse(JSON.stringify(data));
      window.alert(this.msg.status_code + "  " + this.msg.message);
    })
  }
  onPageLoad() {
    this.userDetails = <User>JSON.parse(sessionStorage.getItem('userDetail'));

    this.lotservice.getCarParkLots().subscribe(data => {

      this.lots = data;
    });
    this.minDate = formatDate(this.myDate.setDate(this.myDate.getDate()), "yyyy-MM-dd", 'en');


    this.bookingsService.displayBookings(this.userDetails).subscribe(data => {
      this.parkedCars = data;
    });

    this.cdservice.getUserCars(this.userDetails.user_id).subscribe(data => {
      this.cars = data;
    });
  }
  setCo(name : string){
    this.zones.forEach(element => {
      if (element.zone_name == name) {
        this.latitude = element.alt;
        this.longitude = element.lng;

      }
    });   
  }
  setLot(id: string) {
    this.getzoneById(id);
  }
  getzoneById(id: string){
    this.lotservice.getCarParkLots().subscribe(data => {
      this.lots = data;
      data.forEach(element => {
        if (element.parking_name == id) {
          this.zoneSets = false;
          this.zoneservice.getZones(element.lot_id.toString()).subscribe(data => {
            this.zones = data;
        });
        }
      });

    });
  }

  deleteBooking(booking : ParkedCars){
    this.bookingsService.deleteBookings(booking).subscribe(data =>{
    })
  }

  setDetails(p : ParkedCars){
    this.updateCar_user_id = p.user_id;
    this.updateCar_zone_id  = p.zone_id;
  }
  updateBooking(){

    this.cars.forEach(element => {
      if (element.car_reg == this.carRegId) {
        this.updateCar_car_id = element.car_id;
      }
    });

    this.bookingsService.updateBookings(this.updateCar_user_id,this.updateCar_zone_id,this.updateCar_car_id).subscribe(data =>{
      window.alert(data);
    })
  }  
}

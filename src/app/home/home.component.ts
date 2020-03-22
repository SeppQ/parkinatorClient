import { Component, OnInit } from '@angular/core';
import { LotsService } from '../lots.service';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { Lots } from '../DTO/Lots';
import { ZoneService } from '../zone.service';
import { Zone } from '../DTO/Zone';
import { User } from '../DTO/User';
import { CarDetailsComponent } from 'src/app/car-details/car-details.component';
import { UserCarDataService } from 'src/app/userCar-data.service';
import { Car } from '../DTO/Car';
import { ParkedCars } from '../DTO/ParkedCars';
import { ServerMsg } from '../DTO/ServerMsg';
import { BookingsService } from '../bookings.service';

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
  zoneSets: boolean;
  user: User;
  userDetails: User;
  errorMsg: String = null;
  pc: ParkedCars;
  msg: ServerMsg;
  zoneNameId: string;
  carRegId: string;
  bookTo: string;
  zoneId : number;
  carId : number;
  parkedCars : ParkedCars[]=[];
  ngOnInit() {
    
    this.userDetails = <User>JSON.parse(sessionStorage.getItem('userDetail'));

    this.lotservice.getCarParkLots().subscribe(data => {

      console.log(data.toString());
      this.lots = data;

    });

    this.zoneservice.getZones().subscribe(data => {

      this.zones = data;


    });

    this.user = <User>JSON.parse(sessionStorage.getItem('userDetail'));
    this.cdservice.getUserCars(this.user.user_id).subscribe(data => {

      console.log(data.toString());
      this.cars = data;

      this.errorMsg = null;
    },
      err => {
        console.log("Error = ", err.message);
        this.errorMsg = err.message
      });

      this.user = new User(this.userDetails.user_id,"","","","","","",false);
      this.bookingsService.displayBookings(this.user).subscribe(data =>{
        this.parkedCars = data;
        console.log(data);

      });

  }
  setLot(id: number) {
    sessionStorage.setItem('lotIdHome', id.toString());
    this.zoneSets = true;
  }
  addBooking() {
//HelLLLLo NIGERS
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
    this.pc = (new ParkedCars(this.zoneId,this.carId, this.bookTo, this.bookTo,this.userDetails.user_id));
    this.bookingsService.addBooking(this.pc).subscribe(data => {
      this.msg = <ServerMsg>JSON.parse(JSON.stringify(data));
      window.alert(this.msg.statusCode + "  " + this.msg.message);
    })
  }

  
}

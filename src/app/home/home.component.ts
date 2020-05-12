import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
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
import { async } from '@angular/core/testing';
import { PaymentLogs } from '../DTO/PaymentLogs';
import { PaymentLogsService } from '../services/PaymentLogs/payment-logs.service';
import { ThrowStmt } from '@angular/compiler';
import { CountiesService } from '../services/counties/counties.service';
import { Counties } from '../DTO/Counties';
import { windowWhen } from 'rxjs/operators';
declare var paypal;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('paypal', { static: true }) paypalElement: ElementRef;
  constructor(private auth: AuthenticationService, private rout: Router, private lotservice: LotsService, private zoneservice: ZoneService, private cdservice: UserCarDataService, private bookingsService: BookingsService , private paymentlogsService : PaymentLogsService , private countiesService : CountiesService) { }
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
  parkedCars: ParkedCars[] = null;
  butDisabled: boolean = true;
  myDate = new Date();
  minDate: string;
  rl: number = 0;
  latitude: number;
  longitude: number;
  updateCar_zone_id: number;
  updateCar_user_id: number;
  updateCar_car_id: number;
  paidFor : boolean;
  paymentLogs : PaymentLogs;
  zoneName : string;
  zoom : number = 1;
  zonePrice : number;
  CheckIfClicked : boolean = false;
  counties : Counties [];
  selectedCounty : string;
  zoneForLot : Lots [];
  lotMessage : string = "No Lots Found";
  found : boolean = false;
  checkBookingError : string;
  checkBookingSuccess : string;
  fillout1 : boolean = true;
  fillout2 : boolean = true;
  fillout3 : boolean = true;
  fillout4 : boolean = true;
  fillout5 : boolean = true;
  zoneError : string;
  zoneFound : boolean = false;
  ngOnInit() {
    
    this.getCounties();
    this.onPageLoad();

    paypal.Buttons({
      createOrder: (data, actions) => {
        return actions.order.create({
          purchase_units: [{
            description: "Booking for Zone" + this.zoneName,
            amount: {
              value: this.zonePrice
            }
          }
          ]
        })
      },
      onApprove: async (data, actions) =>{
        const order = await actions.order.capture();
        
        this.paymentLogs = <PaymentLogs>(order);
        let paymentLog = new PaymentLogs(this.paymentLogs.create_time,this.paymentLogs.id,this.paymentLogs.intent,this.paymentLogs.status);
        this.RecordPaymentLogs(paymentLog);
        this.addBooking();
      },
    }).render(this.paypalElement.nativeElement);
  }

  addBooking() {
    this.zones.forEach(element => {
      if (element.zone_name == this.zoneNameId) {
        this.zoneId = element.zone_id;
        this.zoneName = element.zone_name;
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
      window.location.reload();
    })
  }
  onPageLoad() {
    this.userDetails = <User>JSON.parse(sessionStorage.getItem('userDetail'));

    this.minDate = formatDate(this.myDate.setDate(this.myDate.getDate()), "yyyy-MM-dd", 'en');


    this.bookingsService.displayBookings(this.userDetails).subscribe(data => {
      this.parkedCars = data;
    });

    this.cdservice.getUserCars(this.userDetails.user_id).subscribe(data => {
      this.cars = data;
    });
  }
  setCo(name: string) {
    this.zones.forEach(element => {
      if (element.zone_name == name) {
        this.latitude = element.alt;
        this.longitude = element.lng;
        this.zoom = 15
        this.zonePrice = element.price;
        this.zoneName = element.zone_name;
        this.CheckIfClicked = true;
        this.fillout3 = false;
      }else{
       // this.fillout3 = true;
      }
    });
  }
  refresh(): void {
    window.location.reload();
  }
  setLot(id: string) {
    this.getzoneById(id);
  }
  getzoneById(id: string) {
    this.lotservice.getCarParkLots().subscribe(data => {
      this.msg = <ServerMsg>JSON.parse(JSON.stringify(data));
      if(this.msg.status_code == 1){
      this.zoneForLot = JSON.parse(this.msg.message);

      this.zoneForLot.forEach(element => {
        if (element.parking_name == id) {
          this.zoneSets = false;
          this.zoneservice.getZones(element.lot_id.toString()).subscribe(data => {
            this.msg = <ServerMsg>JSON.parse(JSON.stringify(data));
            if(this.msg.status_code == 1){
              this.zones = JSON.parse(this.msg.message);
              this.fillout2 = false;
              this.zoneFound  = false;
              }else{
                this.fillout2 = true;
                this.zoneError = this.msg.message;
                this.zoneFound  = true;
              }
            
          });
        }
      });
      }
    });
  }

  deleteBooking(booking: ParkedCars) {
    this.bookingsService.deleteBookings(booking).subscribe(data => {
    })
  }

  setDetails(p: ParkedCars) {
    this.updateCar_user_id = p.user_id;
    this.updateCar_zone_id = p.zone_id;
  }
  updateBooking() {

    this.cars.forEach(element => {
      if (element.car_reg == this.carRegId) {
        this.updateCar_car_id = element.car_id;
      }
    });

    this.bookingsService.updateBookings(this.updateCar_user_id, this.updateCar_zone_id, this.updateCar_car_id).subscribe(data => {
      window.alert(data);
    })
  }
  RecordPaymentLogs(pl : PaymentLogs){
    this.paymentlogsService.recordPaymentLogs(pl).subscribe( data => {

    })
  }
  setLotsByCounty(){

    let lots = new Lots(0,"",0,this.selectedCounty);
    this.lotservice.getLotsByCounty(lots).subscribe(data =>{
      this.msg = <ServerMsg>JSON.parse(JSON.stringify(data));
      if(this.msg.status_code == 1){
      this.lots = JSON.parse(this.msg.message);
      this.fillout1 = false;
      this.found = false;
      }else{
        console.log(this.lotMessage);
        this.lotMessage = this.msg.message;
        this.lots = [];
        this.found = true;
        this.fillout1 = true;
      }
    })
  }
  getCounties() {
    this.countiesService.getCounties().subscribe(data => {
      this.counties = data;
    })
  }

  checkBooking(){
    this.zones.forEach(element => {
      if (element.zone_name == this.zoneNameId) {
        this.zoneId = element.zone_id;
        this.zoneName = element.zone_name;
      }
    });
    this.cars.forEach(element => {
      if (element.car_reg == this.carRegId) {
        this.carId = element.car_id;
      }
    });


    event.preventDefault;
    this.pc = (new ParkedCars(this.zoneId, this.carId, this.bookTo, this.bookTo, this.userDetails.user_id));


    this.bookingsService.checkBooking(this.pc).subscribe(data => {
      this.msg = <ServerMsg>JSON.parse(JSON.stringify(data));
      if(this.msg.status_code == 1){
        this.checkBookingSuccess = this.msg.message;
        this.checkBookingError = null;
        this.fillout5 = false;
      }else{
        this.checkBookingError = this.msg.message;
        this.checkBookingSuccess = null;
        this.fillout5 = true;
      }
    })
  }

  dateChange(){
    this.fillout4 = false;
  }
}

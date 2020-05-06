import { Component, OnInit } from '@angular/core';
import { SupportService } from 'src/app/services/support/support.service';
import { Support } from 'src/app/DTO/Support';
import { ServerMsg } from 'src/app/DTO/ServerMsg';
import { PaymentLogsService } from 'src/app/services/PaymentLogs/payment-logs.service';
import { PaymentLogs } from 'src/app/DTO/PaymentLogs';
import { UserDataService } from 'src/app/services/user/user-data.service';
import { User } from 'src/app/DTO/User';
import { ParkedCars } from 'src/app/DTO/ParkedCars';
import { BookingsService } from 'src/app/services/bookings/bookings.service';
import { ZoneService } from 'src/app/services/zone/zone.service';
import { Zone } from 'src/app/DTO/Zone';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  constructor(private suppService: SupportService , private paymentLogsService : PaymentLogsService , private userService : UserDataService,private bookings : BookingsService,private zoneService : ZoneService) { }
  tickets: Support[];
  msg: ServerMsg;
  statusCode : string ;
  pl : PaymentLogs [];
  status : string[] = [
    "Sent",
    "In Progress",
    "Done"
  ];
  user : User[];
  zone : Zone[];
  allbookings : ParkedCars[];
  UserCount : number;
  BookingCount : number;
  salesFromCurrentBookings : number;
  zoneCount : number;
  ngOnInit() {
    this.getAllTicekts();
    this.getAllPaymentLogs();
    this.getUserCount();
    this.getBookingCount();
    this.getSalesFromCurrentBookings();
    this.getAllZonesCount();
  }
  getAllTicekts() {
    this.suppService.getTicekts().subscribe(data => {
      this.tickets = data;

    })
  }
  removeTicket(id : number){
    let sup = new Support(id,"","","",0,"");
    this.suppService.removeTickets(sup).subscribe(data =>{
      window.location.reload();
    })
  }  
  updateStatus(id : number){
    let sup = new Support(id,"","","2020-05-05",0,this.statusCode);
    this.suppService.updateTicketStatus(sup).subscribe(data =>{
      window.location.reload();
    })
  }
  getAllPaymentLogs(){
    this.paymentLogsService.getAllPaymentLogs().subscribe(data => {
      this.msg = <ServerMsg>JSON.parse(JSON.stringify(data));
        if(this.msg.status_code == 1){
         this.pl = JSON.parse(this.msg.message);
        }
    })
  }
  getUserCount(){
    this.userService.readUser().subscribe(data =>{
      this.UserCount =0;
      this.user = data;
      this.user.forEach(element => {
        this.UserCount ++;
        
      });
      
    })
  }
  getBookingCount(){
    this.bookings.getAllBookings().subscribe(data =>{
      this.BookingCount =0;
     
      this.msg = <ServerMsg>JSON.parse(JSON.stringify(data));
      if(this.msg.status_code == 1){
        this.allbookings = JSON.parse(this.msg.message);
      this.allbookings.forEach(element => {
        this.BookingCount ++;
      });
    }
    })
  }
  getSalesFromCurrentBookings(){
    this.bookings.getAllBookings().subscribe(data =>{
      this.BookingCount =0;
     
      this.msg = <ServerMsg>JSON.parse(JSON.stringify(data));
      if(this.msg.status_code == 1){
        this.allbookings = JSON.parse(this.msg.message);
      this.allbookings.forEach(element => {
        this.BookingCount ++;
      });
      this.salesFromCurrentBookings = this.BookingCount * 5.00;
    }
    })
  }

  getAllZonesCount(){
    this.zoneCount = 0;
    this.zoneService.getAllZones().subscribe(data =>{
      this.zone = data
      this.zone.forEach(element => {
        this.zoneCount ++;
      });
    })
  }
}

import { Component, OnInit } from '@angular/core';
import { ZoneService } from '../services/zone/zone.service';
import { Zone } from '../DTO/Zone';
import { CcDataService } from '../services/cc/cc-data.service';
import { Car } from '../DTO/Car';
import { ServerMsg } from '../DTO/ServerMsg';
import { BookingDetails } from '../DTO/BookingDetails';

@Component({
  selector: 'app-cc-home',
  templateUrl: './cc-home.component.html',
  styleUrls: ['./cc-home.component.css']
})
export class CcHomeComponent implements OnInit {
  searchTerm : string;
  searchTerm2 : string;
  searchTerm3 : string;
  zone : Zone[];
  car : Car[];
  msg : ServerMsg;
  checkStatus : boolean;
  checkStatus2 : boolean;
  checkmsg : boolean;
  checkreg : boolean;
  zoneName : string;
  bds : BookingDetails[];
  
  constructor(private zoneservice: ZoneService ,private ccService :  CcDataService) { }

  ngOnInit() {
    this.getZones();
  }
  getZones(){
    this.zoneservice.getAllZones().subscribe(data =>{
      this.msg = <ServerMsg>JSON.parse(JSON.stringify(data));
      this.zone = JSON.parse(this.msg.message);
    })

    this.ccService.getAllRegsFromZones().subscribe(data =>{
      this.msg = data;
      if(this.msg.status_code != 1){
        this.checkmsg = true;
        this.checkreg = false;
      }else{
        this.checkmsg = false;
        this.checkreg = true;
        this.bds = JSON.parse(this.msg.message);
      }
    })
   
  }
  
  showCarReg(zoneId : number , zoneName : string){
    this.ccService.getZoneReg(zoneId).subscribe(data => {
      this.zoneName = zoneName;
       console.log(JSON.stringify(data));
       this.msg = <ServerMsg>JSON.parse(JSON.stringify(data));
       if(this.msg.status_code == -1){
        this.checkStatus= true;
        this.checkStatus2 =false
       }else{
         this.checkStatus = false;
         this.checkStatus2 =true;
         this.car = JSON.parse(this.msg.message);
       }
    })
  }
}

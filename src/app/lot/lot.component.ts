import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication/authentication.service';
import { Router } from '@angular/router';
import { LotsService } from '../services/lots/lots.service';
import { Lots } from '../DTO/Lots';
import { ServerMsg } from '../DTO/ServerMsg';
import { Zone } from '../DTO/Zone';
import { ThrowStmt } from '@angular/compiler';
import { ZoneService } from '../services/zone/zone.service';
import { CountiesService } from '../services/counties/counties.service';
import { Counties } from '../DTO/Counties';
@Component({
  selector: 'app-lot',
  templateUrl: './lot.component.html',
  styleUrls: ['./lot.component.scss']
})
export class LotComponent implements OnInit {
  lotName: string;
  lot: Lots;
  lotid: number;
  lots: Lots[] = [];
  msg: ServerMsg;
  zoneId: number;
  zoneName: string;
  maxSpaces: number;
  isVip: boolean;
  maxDisabledSpaces: number;
  zones: Zone;
  zoneMaps: Zone;
  zone: Zone[] = [];
  latitude: number;
  longitude: number;
  searchTerm: string;
  lotSearchTerm: string;
  newZoneName: string;
  updateZoneId: number;
  counties: Counties[];
  countyName: string;
  checkLotError: boolean = false;
  lotError: string;
  checkZoneError: boolean = false;
  zoneError: string;
  price:number;
  newPrice : number;

  constructor(private auth: AuthenticationService, private rout: Router, private lotservice: LotsService, private zoneservice: ZoneService, private countiesService: CountiesService) { }

  ngOnInit() {
    this.lotservice.getCarParkLots().subscribe(data => {
      this.msg = <ServerMsg>JSON.parse(JSON.stringify(data));
      if (this.msg.status_code == 1) {
        
        this.lots = JSON.parse(this.msg.message);
      }
      else {
        this.lotError = this.msg.message;
        this.checkLotError = true;
      }

    });

    this.getZones();
    this.getCounties();
  }
  refresh(): void {
    window.location.reload();
  }
  addingLot() {
    event.preventDefault;
    
    this.lot = (new Lots(1, this.lotName, 1, this.countyName));
    this.lotservice.addCarParkLot(this.lot).subscribe(data => {
      this.msg = <ServerMsg>JSON.parse(JSON.stringify(data));
      window.alert(this.msg.status_code + "  " + this.msg.message);
    })

  }
  setId(id: number) {
    sessionStorage.setItem('lotIdZone', id.toString());
  }
  getLots() {
    this.lotservice.getCarParkLots().subscribe(data => {
      this.lots = <Lots[]>JSON.parse(JSON.stringify(data));
    })
  }
  getZones() {
    this.zoneservice.getAllZones().subscribe(data => {

      this.msg = <ServerMsg>JSON.parse(JSON.stringify(data));
      if (this.msg.status_code == 1) {
        this.zone = JSON.parse(this.msg.message);
      }
      else {
        this.zoneError = this.msg.message;
        this.checkZoneError = true;
      }

    })

  }
  removeLots(lotid: number) {
    event.preventDefault;
    this.lot = (new Lots(lotid, " ", 1, "s"));
    this.lotservice.removeLot(this.lot).subscribe(data => {
      this.msg = <ServerMsg>JSON.parse(JSON.stringify(data));
      window.alert(this.msg.status_code + "  " + this.msg.message);
    })
    this.refresh();

  }
  addingZone() {
    this.lotid = Number(sessionStorage.getItem("lotIdZone"))
    this.zoneMaps = new Zone(1, this.zoneName, this.maxSpaces, false, this.lotid, this.maxDisabledSpaces, this.latitude, this.longitude,this.price);
    this.zoneservice.addZone(this.zoneMaps).subscribe(data => {
      this.msg = <ServerMsg>JSON.parse(JSON.stringify(data));
      window.alert(this.msg.status_code + "  " + this.msg.message)
    })
    this.refresh();
  }
  placeMarker($event) {
    this.latitude = $event.coords.lat;
    this.longitude = $event.coords.lng;
  }
  removeZone(zoneid: number) {
    let zone = new Zone(zoneid, "", 0, false, 0, 0, 0, 0,0);
    this.zoneservice.removeZone(zone).subscribe(data => {
      this.msg = <ServerMsg>JSON.parse(JSON.stringify(data));
      this.refresh();
    })
  }
  setZoneId(id: number) {
    this.updateZoneId = id;
  }
  updateZonePrice() {
    let zone = new Zone(this.updateZoneId,"", 0, false, 0, 0, 0, 0,this.newPrice);
    this.zoneservice.updateZone(zone).subscribe(data => {
      this.refresh();
    })
  }

  getCounties() {
    this.countiesService.getCounties().subscribe(data => {
      this.counties = data;
    })
  }
}

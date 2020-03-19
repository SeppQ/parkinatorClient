import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';
import { LotsService } from '../lots.service';
import { Lots } from '../DTO/Lots';
import { ServerMsg } from '../DTO/ServerMsg';
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
  zoneName : string;
  maxSpaces : number;
  isVip : boolean;
  maxDisabledSpaces : number;
  
  constructor(private auth: AuthenticationService, private rout: Router, private lotservice: LotsService) { }

  ngOnInit() {
    this.lotservice.getCarParkLots().subscribe(data => {

      console.log(data.toString());
      this.lots = data;

      this.lots.forEach(element => {
        console.log(element);
      });
    });

  }
  refresh(): void {
    window.location.reload();
  }
  addingLot(){
    event.preventDefault;
    this.lot = (new Lots(1, this.lotName, 1));
    this.lotservice.addCarParkLot(this.lot).subscribe(data => {
      this.msg = <ServerMsg>JSON.parse(JSON.stringify(data));
      window.alert(this.msg.statusCode + "  " + this.msg.message);
    })

  }
  getLots(){
    this.lotservice.getCarParkLots().subscribe(data => {
      this.lots = <Lots[]>JSON.parse(JSON.stringify(data));
    })
  }
  removeLots(lotid: number){
    event.preventDefault;
    this.lot = (new Lots(lotid, " ", 1));
    this.lotservice.removeLot(this.lot).subscribe(data => {
      this.msg = <ServerMsg>JSON.parse(JSON.stringify(data));
      window.alert(this.msg.statusCode + "  " + this.msg.message);
    })

  }
  addingZone(lotid: number){

  }
}

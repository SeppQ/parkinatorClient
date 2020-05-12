import { Component, OnInit } from '@angular/core';
import { Lots } from '../DTO/Lots';

@Component({
  selector: 'app-regular-lot-page',
  templateUrl: './regular-lot-page.component.html',
  styleUrls: ['./regular-lot-page.component.css']
})
export class RegularLotPageComponent implements OnInit {


  selectedLot : Lots;
  selectedLotID : number;
  constructor() { }

  ngOnInit() {
  }

  setSelectedLot(event){
    this.selectedLot = event;
  }

  setSelectedLotID(event){
    this.selectedLotID = event;
  }

}

import { Component, OnInit } from '@angular/core';
import { Cc } from '../DTO/Cc';

@Component({
  selector: 'app-admin-cc-page',
  templateUrl: './admin-cc-page.component.html',
  styleUrls: ['./admin-cc-page.component.css']
})
export class AdminCcPageComponent implements OnInit {

  selectedCc : Cc;
  selectedCcID : number;
  constructor() { }

  ngOnInit() {
  }

  setSelectedCc(event){
    this.selectedCc = event;
  }

  setSelectedCcID(event){
    this.selectedCcID = event;
  }

}

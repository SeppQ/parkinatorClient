import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/DTO/Car';

@Component({
  selector: 'app-admin-car-page',
  templateUrl: './admin-car-page.component.html',
  styleUrls: ['./admin-car-page.component.css']
})
export class AdminCarPageComponent implements OnInit {

  selectedCar : Car;
  selectedCarID : number;
  constructor() { }

  ngOnInit() {
  }

  setSelectedCar(event){
    this.selectedCar = event;
  }

  setSelectedCarID(event){
    this.selectedCarID = event;
  }

}

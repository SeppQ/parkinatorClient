import { Component, OnInit } from '@angular/core';
import { Car } from '../DTO/Car';

@Component({
  selector: 'app-car-page',
  templateUrl: './car-page.component.html',
  styleUrls: ['./car-page.component.css']
})
export class CarPageComponent implements OnInit {

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

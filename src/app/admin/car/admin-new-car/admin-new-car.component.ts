import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/DTO/Car';
import { CarDataService } from 'src/app/services/car/car-data.service';

@Component({
  selector: 'app-admin-new-car',
  templateUrl: './admin-new-car.component.html',
  styleUrls: ['./admin-new-car.component.css']
})
export class AdminNewCarComponent implements OnInit {

  car : Car;

  constructor(private cdService :CarDataService) { }

  ngOnInit() {

    this.car = new Car(0,"","","","",0);
  }

  addNew(){
    this.cdService.newCar(this.car);
    //window.location.reload();
  }

  openNew(){
    this.car = new Car(0,"","","","",0);
  }

}

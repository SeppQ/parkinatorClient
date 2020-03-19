import { Component, OnInit } from '@angular/core';
import { Car } from '../dto/Car';
import { User } from '../DTO/User';
import { CarDataService } from '../car-data.service';

@Component({
  selector: 'app-new-car',
  templateUrl: './new-car.component.html',
  styleUrls: ['./new-car.component.css']
})
export class NewCarComponent implements OnInit {

  car : Car;
  user : User;

  constructor(private cdService :CarDataService) { }

  ngOnInit() {

    this.user = <User>JSON.parse(sessionStorage.getItem('userDetail'));
    this.car = new Car(0,"","","","",this.user.user_id);
  }

  addNew(){
    this.cdService.newCar(this.car);
    //window.location.reload();
  }

  openNew(){
    this.user = <User>JSON.parse(sessionStorage.getItem('userDetail'));
    this.car = new Car(0,"","","","",this.user.user_id);
  }

}

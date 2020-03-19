import { Component, OnInit } from '@angular/core';
import { Car } from '../dto/Car';
import { Users } from '../DTO/Users';
import { CarDataService } from '../car-data.service';

@Component({
  selector: 'app-new-car',
  templateUrl: './new-car.component.html',
  styleUrls: ['./new-car.component.css']
})
export class NewCarComponent implements OnInit {

  car : Car;
  user : Users;

  constructor(private cdService :CarDataService) { }

  ngOnInit() {

    this.user = <Users>JSON.parse(sessionStorage.getItem('userDetail'));
    this.car = new Car(0,"","","","",this.user.user_id);
  }

  addNew(){
    this.cdService.newCar(this.car);
    //window.location.reload();
  }

  openNew(){
    this.user = <Users>JSON.parse(sessionStorage.getItem('userDetail'));
    this.car = new Car(0,"","","","",this.user.user_id);
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { CarDataService } from '../car-data.service';
import { CarListComponent } from '../car-list/car-list.component';
import { NgForm } from '@angular/forms';
import { Car } from '../DTO/Car';

@Component({
  selector: 'app-admin-car-details',
  templateUrl: './admin-car-details.component.html',
  styleUrls: ['./admin-car-details.component.css']
})
export class AdminCarDetailsComponent implements OnInit {


  @Input() car:Car;
  notEditable : boolean = true;
  buttonText : string = "Edit";
  newCars : Car[] = [];

  constructor(private cdService : CarDataService, private cl : CarListComponent) { }

  ngOnInit() {
    this.car = new Car (0,"","","","",0);
  }
//
  onSubmit( details : NgForm ) {
    if(this.notEditable) {
      this.notEditable = false;
      this.buttonText = "Save";
    }
    else{
      this.notEditable = true;
      this.buttonText = "Edit";

      let changed : boolean = false;
      for(let key in details.value) 
      {
        if(details.value[key].length !=0)
        {
          changed = true;
          this.car[key] = details.value[key];
        }
      }
      //this signifies in the json string that the put should be used to update the car
      this.cdService.updateCar(this.car);
      //just for safety, the value is removed from the car
    }
  }

  onSubmit2( details : NgForm ) {
    event.defaultPrevented;
    //this signifies in the json string that the put should be used to delete the car
      this.cdService.removeCar(this.car);
      //just for safety, the value is removed from the car
      this.cl.cars.forEach(element => {
        if(element.car_id!=this.car.car_id){
          this.newCars.push(element);
        }
      });
      this.cl.cars = this.newCars;
  }

}

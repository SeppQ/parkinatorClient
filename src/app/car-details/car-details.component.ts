import { Component, OnInit, Input } from '@angular/core';
import { Car } from '../DTO/Car';
import { NgForm } from '@angular/forms';
import { CarDataService } from '../services/car/car-data.service';
import { User } from '../DTO/User';
import { CarListComponent } from '../car-list/car-list.component';
import { CarModelDataService } from '../services/car_model/car-model-data.service';
import { CarMakeDataService } from '../services/car_make/car-make-data.service';

@Component({
  selector: 'app-car-list-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {

  @Input() car:Car;
  cMakes = [];
  cModels = [];
  notEditable : boolean = true;
  buttonText : string = "Edit";
  user : User = <User>JSON.parse(sessionStorage.getItem('userDetail')); 
  newCars : Car[] = [];

  constructor(private cdService : CarDataService, private cl : CarListComponent, private _cModel : CarModelDataService, private _cMake : CarMakeDataService) { }

  ngOnInit() {
    this.car = new Car (0,"","","","","",0);
    this._cMake.getAllCarMakes().subscribe(data => {this.cMakes = data});
    
  }

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
      this.cdService.updateCar(this.car).subscribe();
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
      window.location.reload();

  }
  getModelsById(id: string) {
 
    this._cMake.getAllCarMakes().subscribe(data => {
      data.forEach(element => {
        if(element.car_make_name == id){
          
          this._cModel.getCarModelsById(element.car_make_id).subscribe(data => {
            this.cModels = data
          });
        }
      });

    });

  }
}

import { Component, OnInit } from '@angular/core';
import { Car } from '../dto/Car';
import { User } from '../DTO/User';
import { CarDataService } from '../services/car/car-data.service';
import { CarModelDataService } from '../services/car_model/car-model-data.service';
import { CarMakeDataService } from '../services/car_make/car-make-data.service';

@Component({
  selector: 'app-new-car',
  templateUrl: './new-car.component.html',
  styleUrls: ['./new-car.component.css']
})
export class NewCarComponent implements OnInit {

  car: Car;
  user: User;
  cMakes = [];
  cModels = [];
  constructor(private cdService: CarDataService, private _cModel: CarModelDataService, private _cMake: CarMakeDataService) { }

  ngOnInit() {

    this.user = <User>JSON.parse(sessionStorage.getItem('userDetail'));
    this.car = new Car(0, "","", "", "", "", this.user.user_id);
    this._cMake.getAllCarMakes().subscribe(data => { this.cMakes = data });
  }

  addNew() {
    this.cdService.newCar(this.car);

    window.location.reload();
  }

  openNew() {
    this.user = <User>JSON.parse(sessionStorage.getItem('userDetail'));
    this.car = new Car(0, "","", "", "", "", this.user.user_id);
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

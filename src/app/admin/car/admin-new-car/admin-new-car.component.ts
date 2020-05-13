import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/DTO/Car';
import { CarDataService } from 'src/app/services/car/car-data.service';
import { VechilesService } from 'src/app/services/vechiles/vechiles.service';
import { VehicleMake } from 'src/app/DTO/VehicleMake';
import { MakeApiResponse } from 'src/app/DTO/MakeApiResponse';
import { CarModelDataService } from 'src/app/services/car_model/car-model-data.service';
import { CarMakeDataService } from 'src/app/services/car_make/car-make-data.service';

@Component({
  selector: 'app-admin-new-car',
  templateUrl: './admin-new-car.component.html',
  styleUrls: ['./admin-new-car.component.css']
})
export class AdminNewCarComponent implements OnInit {

  car : Car;
  makes : VehicleMake[];
  apiResponse : MakeApiResponse;
  showDropDowm : boolean = false;
  searchTerm : string;
  cMakes = [];
  cModels = [];
  constructor(private cdService :CarDataService, private vehicleMakeService : VechilesService, private _cModel: CarModelDataService, private _cMake: CarMakeDataService) { }

  ngOnInit() {

    this.car = new Car(0,"","","","","",0);
 //   this.vehicleMakeService.getUserCars().subscribe(data => {
   //   this.apiResponse = <MakeApiResponse>JSON.parse(JSON.stringify(data));
     // this.makes = JSON.parse(JSON.stringify(this.apiResponse.Results));
        
   // })
   this._cMake.getAllCarMakes().subscribe(data => { this.cMakes = data });
  }

  addNew(){
    this.cdService.newCar(this.car);
    window.location.reload();
  }

  openNew(){
    this.car = new Car(0,"","","","","",0);
  }
  toggleDropdown(){
    this.showDropDowm = !this.showDropDowm;
  }
  selectValue(value : string){
    this.searchTerm = value;
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

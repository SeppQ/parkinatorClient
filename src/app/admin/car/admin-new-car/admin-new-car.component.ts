import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/DTO/Car';
import { CarDataService } from 'src/app/services/car/car-data.service';
import { VechilesService } from 'src/app/services/vechiles/vechiles.service';
import { VehicleMake } from 'src/app/DTO/VehicleMake';
import { MakeApiResponse } from 'src/app/DTO/MakeApiResponse';

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
  constructor(private cdService :CarDataService, private vehicleMakeService : VechilesService) { }

  ngOnInit() {

    this.car = new Car(0,"","","","",0);
    this.vehicleMakeService.getUserCars().subscribe(data => {
      this.apiResponse = <MakeApiResponse>JSON.parse(JSON.stringify(data));
      this.makes = JSON.parse(JSON.stringify(this.apiResponse.Results));
        
    })
  }

  addNew(){
    this.cdService.newCar(this.car);
    window.location.reload();
  }

  openNew(){
    this.car = new Car(0,"","","","",0);
  }
  toggleDropdown(){
    this.showDropDowm = !this.showDropDowm;
  }
  selectValue(value : string){
    this.searchTerm = value;
  }
}

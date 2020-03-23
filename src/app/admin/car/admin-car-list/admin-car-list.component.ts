import { Component, OnInit, Output, EventEmitter, Injectable } from '@angular/core';
import { Car } from 'src/app/DTO/Car';
import { CarDataService } from 'src/app/services/car/car-data.service';
@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-admin-car-list',
  templateUrl: './admin-car-list.component.html',
  styleUrls: ['./admin-car-list.component.css']
})
export class AdminCarListComponent implements OnInit {

  @Output() selectedCar = new EventEmitter<Car>();
  selectedCarID : number;
  cars: Car[] = [];
  errorMsg :String = null;
  car_id : number;

  constructor(private cdService :CarDataService) { }


  ngOnInit() {
    this.cdService.readCars().subscribe( data => {
      
      console.log(data.toString());
      this.cars = data;

      this.cars.forEach(element => {
      console.log(element);
      });
      this.errorMsg = null;
    },
    err=> {console.log("Error = ", err.message);
      this.errorMsg = err.message});
  }

  carSelected(i : number){
    console.log("Car ID = " + i);
    this.selectedCar.emit(this.cars.find(car => car.car_id === i));    
    this.selectedCarID = i;
  }

  trackByFn(index, item) {

    return ; // or item.id

  }
}

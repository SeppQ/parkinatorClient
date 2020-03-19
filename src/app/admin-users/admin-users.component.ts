import { Component, OnInit, Input } from '@angular/core';
import { UserDataService } from '../user-data.service';
import { User } from '../DTO/User';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit {

  constructor(private udService: UserDataService) { }

  @Input() user:User;
  notEditable : boolean = true;
  buttonText : string = "Edit";
  users : User[] = [];
  errorMsg : String;

  ngOnInit() {
    this.udService.readUser().subscribe( data => {
      
      console.log(data.toString());
      this.users = data;

      this.users.forEach(element => {
      console.log(element);
      });
      this.errorMsg = null;
    },
    err=> {console.log("Error = ", err.message);
      this.errorMsg = err.message});
  }
/*
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
  }*/

}

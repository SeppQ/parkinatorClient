import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../user-data.service';
import { Users } from '../DTO/Users';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit {

  constructor(private udService: UserDataService) { }

  users : Users[] = [];
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

}

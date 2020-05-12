import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/DTO/User';
import { UserDataService } from 'src/app/services/user/user-data.service';
 
@Component({
  selector: 'app-admin-new-user',
  templateUrl: './admin-new-user.component.html',
  styleUrls: ['./admin-new-user.component.css']
})
export class AdminNewUserComponent implements OnInit {

  user : User;

  constructor(private udService :UserDataService) { }

  ngOnInit() {

    this.user = new User(0,"","","","","","",false);
  }

  addNew(){
    this.udService.createUser(this.user).subscribe();
    window.location.reload();
  }

  openNew(){
    this.user = new User(0,"","","","","","",false);
  }

}

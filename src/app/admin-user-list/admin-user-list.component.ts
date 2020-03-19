import { Component, OnInit, Injectable, Output, EventEmitter } from '@angular/core';
import { User } from '../DTO/User';
import { UserDataService } from '../user-data.service';


@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-admin-user-list',
  templateUrl: './admin-user-list.component.html',
  styleUrls: ['./admin-user-list.component.css']
})
export class AdminUserListComponent implements OnInit {

  @Output() selectedUser = new EventEmitter<User>();
  selectedUserID : number;
  user: User;
  users: User[] = [];
  errorMsg :String = null;
  user_id : number;

  constructor(private udService :UserDataService) { }


  ngOnInit() {
    this.user = <User>JSON.parse(sessionStorage.getItem('userDetail'));
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

  userSelected(i : number){
    console.log("user ID = " + i);
    this.selectedUser.emit(this.users.find(user => user.user_id === i));    
    this.selectedUserID = i;
  }

  trackByFn(index, item) {

    return ; // or item.id

  }

}

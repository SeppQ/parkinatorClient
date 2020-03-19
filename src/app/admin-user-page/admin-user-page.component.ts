import { Component, OnInit } from '@angular/core';
import { User } from '../DTO/User';

@Component({
  selector: 'app-admin-user-page',
  templateUrl: './admin-user-page.component.html',
  styleUrls: ['./admin-user-page.component.css']
})
export class AdminUserPageComponent implements OnInit {

  selectedUser : User;
  selectedUserID : number;
  constructor() { }

  ngOnInit() {
  }

  setSelectedUser(event){
    this.selectedUser = event;
  }

  setSelectedUserID(event){
    this.selectedUserID = event;
  }
}

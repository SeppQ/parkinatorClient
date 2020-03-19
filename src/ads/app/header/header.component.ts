import { Component, OnInit } from '@angular/core';
import { Users } from '../DTO/Users';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user : Users;
  isAdmin : boolean;
  constructor() {}

  ngOnInit() {
    this.user = <Users>JSON.parse(sessionStorage.getItem('userDetail'));
    this.isAdmin = (this.user.user_type == "admin");
    console.log(this.user);
    console.log("IS admin " + this.isAdmin + " " +this.user.user_type);
  }
  logout(){
    sessionStorage.removeItem('userDetails');
    sessionStorage.setItem('loggedIn','false');
  }

}

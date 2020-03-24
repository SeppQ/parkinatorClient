import { Component, OnInit } from '@angular/core';
import { User } from '../DTO/User';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user : User;
  isAdmin : boolean;
  username : string;
  constructor(private rout: Router) {}

  ngOnInit() {
    this.user = <User>JSON.parse(sessionStorage.getItem('userDetail'));
    this.username = this.user.user_fullname;
    this.isAdmin = (this.user.user_type == "admin");
    console.log(this.user);
    console.log("IS admin " + this.isAdmin + " " +this.user.user_type);
  }
  logout(){
    sessionStorage.removeItem('userDetails');
    sessionStorage.setItem('loggedIn','false');
    this.rout.navigate(["/"]);

  }

}

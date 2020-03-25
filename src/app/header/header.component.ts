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
  isRegular : boolean;
  isLotManager : boolean;
  username : string;
  constructor(private rout: Router) {}
  webPage : string;
  date = new Date();
  ngOnInit() {

    this.user = <User>JSON.parse(sessionStorage.getItem('userDetail'));
    sessionStorage.setItem('type',this.user.user_type);
    console.log(this.user)
    this.getPageDetails();
    

    if(sessionStorage.getItem('loggedIn').toString() == 'true'){
      if(sessionStorage.getItem('type') != "admin" || sessionStorage.getItem('type') != "lotManager"){
        if(this.rout.url == "/admin-user-page" || this.rout.url == "/admin-car-page" || this.rout.url == "/admin-cc-page" || this.rout.url == "/lots"){
          this.rout.navigate(['/home'])
        }
      }
    }else{
      this.rout.navigate(['/'])
    }
  }
  logout(){
    sessionStorage.removeItem('userDetail');
    sessionStorage.removeItem('login');
    sessionStorage.setItem('loggedIn','false');
    this.rout.navigate(["/"]);

  }
  getPageDetails(){
    this.webPage=(this.rout.url).substring(1);
    this.username = this.user.user_fullname;
    this.isAdmin = (this.user.user_type == "admin");
    this.isRegular = (this.user.user_type == "regular");
    this.isLotManager = (this.user.user_type == "lotManager");
  }

}

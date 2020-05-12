import { Component, OnInit } from '@angular/core';
import { User } from '../DTO/User';
import { Router } from '@angular/router';
import { ProfileService } from '../services/profile/profile.service';
import { UserImage } from '../DTO/Image';
import { ServerMsg } from '../DTO/ServerMsg';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user: User;
  isAdmin: boolean;
  isRegular: boolean;
  isLotManager: boolean;
  isClampingEmp: boolean;
  username: string;
  constructor(private rout: Router, private profileService: ProfileService) { }
  webPage: string;
  date = new Date();
  userImage: UserImage;
  userImage2: string;
  msg: ServerMsg;

  ngOnInit() {

    this.user = <User>JSON.parse(sessionStorage.getItem('userDetail'));
    sessionStorage.setItem('type', this.user.user_type);
    this.getPageDetails();
    this.getImage();

    if (sessionStorage.getItem('loggedIn').toString() == 'true') {
      if (sessionStorage.getItem('type') != "admin" && sessionStorage.getItem('type') != "clamping") {
        if (this.rout.url == "/admin-user-page" || this.rout.url == "/admin-car-page" || this.rout.url == "/admin-cc-page" || this.rout.url == "/lots") {
          this.rout.navigate(['/home'])
        }
      } 
      
    } else {
      this.rout.navigate(['/'])
    }
  }
  logout() {
    sessionStorage.removeItem('userDetail');
    sessionStorage.removeItem('login');
    sessionStorage.removeItem('image');
    sessionStorage.setItem('loggedIn', 'false');
    localStorage.removeItem("base64");
    this.rout.navigate(["/"]);

  }
  getPageDetails() {
    this.webPage = (this.rout.url).substring(1);
    this.username = this.user.user_fullname;
    this.isAdmin = (this.user.user_type == "admin");
    this.isRegular = (this.user.user_type == "regular");
    this.isLotManager = (this.user.user_type == "lotManager");
    this.isClampingEmp = (this.user.user_type == "clamping");
  }
  getImage() {
    let image = new UserImage(this.user.email, "");

    this.profileService.getImage(image).subscribe(data => {
      this.msg = <ServerMsg>JSON.parse(JSON.stringify(data));
      if (this.msg.status_code == 1) {
        this.userImage = <UserImage>JSON.parse(this.msg.message);
        sessionStorage.setItem('image', this.userImage.image);
        this.userImage2 = sessionStorage.getItem('image');
      } else {

        sessionStorage.setItem('image', "../../assets/nopicture.png");
        this.userImage2 = sessionStorage.getItem('image');

      }
    })
  }
}

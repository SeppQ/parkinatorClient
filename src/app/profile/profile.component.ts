import { Component, OnInit } from '@angular/core';
import { User } from '../DTO/User';
import { UserDataService } from '../services/user/user-data.service';
import { UserDetailsDataService } from '../services/user/user-details-data.service';
import { HttpClient } from '@angular/common/http';
import { ProfileService } from '../services/profile/profile.service';
import { UserImage } from '../DTO/Image';
import { ServerMsg } from '../DTO/ServerMsg';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: User;
  message: boolean = false;
  messageText: string;
  messageClass: string;
  input: boolean = false;
  details: boolean = true;
  buttonName: string = "Update";
  fullname: string;
  email: string;
  image : string;
  msg : ServerMsg;
  userImage :UserImage ;
  constructor(
    private udService: UserDataService,
    private uddService: UserDetailsDataService,
    private http : HttpClient,
    private profileService : ProfileService
  ) { }

  ngOnInit() {
    this.user = <User>JSON.parse(sessionStorage.getItem('userDetail'));
    //this.image = sessionStorage.getItem("image")
    this.getImage()
  }
  update() {
    event.preventDefault()
    if (this.buttonName != "Save") {
      if (this.input == false && this.details == true) {
        this.input = true;
        this.details = false;
        this.buttonName = "Save";
      } else {
        this.input = false;
        this.details = true;
      }
    }
    else if (this.buttonName == "Save" && this.fullname == "") {
      console.log("Fullname Required");
      this.messageText = "Warning! Fullname Required";
      this.messageClass = "alert alert-warning";
      this.message = true;
    }
    else {
      this.user = new User(-1, this.fullname, this.user.email, this.user.hash, this.user.user_type, this.user.question, this.user.answer_hash, this.user.has_disabled_badge);
      this.buttonName = "Update";
      this.input = false;
      this.details = true;
      this.udService.updateUser(this.user).subscribe(data => {
        this.uddService.getUserDetails(this.user).subscribe(data => {
          sessionStorage.setItem('userDetail', JSON.stringify(data));
          this.user = <User>JSON.parse(sessionStorage.getItem('userDetail'));
        })

        this.user = <User>JSON.parse(sessionStorage.getItem('userDetail'));
        this.messageText = "Success! Details updated";
        this.messageClass = "alert alert-success";
        this.message = true;
      });
      console.log("saved")

    }
  }
  selectedFile = null;
  processFile($event) {
    this.selectedFile = event.target[0];
    console.log(event);
    
  }

  getBase64(event) {
    let file = event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      localStorage.setItem("base64",reader.result.toString())
     // console.log(reader.result);
      
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
    let image = new UserImage (this.user.email,localStorage.getItem('base64'));
    this.profileService.uploadImage(image).subscribe(data =>{
      this.getImage();
      window.location.reload();
    })
  }
  getImage() {
    let image = new UserImage(this.user.email, "");

    this.profileService.getImage(image).subscribe(data => {
      this.msg = <ServerMsg>JSON.parse(JSON.stringify(data));
      if (this.msg.status_code == 1) {
        this.userImage = <UserImage>JSON.parse(this.msg.message);
        sessionStorage.setItem('image', this.userImage.image);
        this.image = this.userImage.image;
      } 
      else{
        this.image = sessionStorage.getItem('image');
      }
    })
  }
}

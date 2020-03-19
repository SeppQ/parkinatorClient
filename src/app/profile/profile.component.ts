import { Component, OnInit } from '@angular/core';
import { User } from '../DTO/User';
import { UserDataService } from '../user-data.service';
import { UserDetailsDataService } from '../user-details-data.service';



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
  fullname : string;
  email : string;
  
  constructor(
    private udService:UserDataService,
    private uddService:UserDetailsDataService
     ) { }

  ngOnInit() {
    this.user = <User>JSON.parse(sessionStorage.getItem('userDetail'));
    
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
    else if(this.buttonName == "Save" && this.fullname == ""){
      console.log("Fullname Required");
      this.messageText="Warning! Fullname Required";
      this.messageClass="alert alert-warning";
      this.message = true;
    }
    else{
      this.user = new User(-1,this.fullname,this.user.email,this.user.hash,this.user.user_type,this.user.question,this.user.answer_hash,this.user.has_disabled_badge);
      this.buttonName = "Update";
      this.input = false;
      this.details = true;
      this.udService.updateUser(this.user).subscribe(data =>{
        this.uddService.getUserDetails(this.user).subscribe(data => {
          sessionStorage.setItem('userDetail',JSON.stringify(data));
          this.user = <User>JSON.parse(sessionStorage.getItem('userDetail'));
        })
        
        this.user = <User>JSON.parse(sessionStorage.getItem('userDetail'));
      this.messageText="Success! Details updated";
      this.messageClass="alert alert-success";
      this.message = true;
      });
      console.log("saved")
      
    }
  }
}

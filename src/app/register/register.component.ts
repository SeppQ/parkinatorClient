import { Component, OnInit, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { User } from '../DTO/User';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Login } from '../DTO/Login';
import { UserDataService } from '../user-data.service';
import { LoginDataService } from '../login-data.service';
import { UserDetailsDataService } from '../user-details-data.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})


export class RegisterComponent implements OnInit {
  user : User;
  login : Login;
  fullname : string;
  email : string;
  type1 : string = "regular";
  disbaled_badge : boolean = false;
  hash : string;
  passA : string;
  passQ :string;
  alterEgo : FormControl;
  recoveryQuestions : string[] = [
    "What was your childhood nickname?",
    "In what city did you meet your spouse/significant other?",
    "What is the name of your favorite childhood friend?",
    "What street did you live on in third grade?",
    "What is your oldest sibling’s birthday month and year?",
    "What is the middle name of your youngest child?",
    "What is your oldest sibling's middle name?",
    "What school did you attend for sixth grade?",
    "What was your childhood phone number including area code?",
    "What is your oldest cousin's first and last name?",
    "What was the name of your first stuffed animal?",
    "In what city or town did your mother and father meet?",
    "Where were you when you had your first kiss?",
    "What is the first name of the boy or girl that you first kissed?",
    "What was the last name of your third grade teacher?"
  ];
  constructor(
    private auth :AuthenticationService, 
    private udService : UserDataService, 
    private ldService : LoginDataService, 
    private uddService : UserDetailsDataService, 
    private rout :Router
    ) { }
  
  ngOnInit() {
    
  }

  goBack(){
    this.rout.navigate(['/']);
  }

  registerUser(){
    event.preventDefault();
    this.user = ( new User(null,this.fullname,this.email,this.hash,this.type1,this.passQ,this.passA,this.disbaled_badge));
    this.udService.createUser(this.user).subscribe(data => {
      console.log(data);
      if(JSON.parse(data.toString()) == true){
        this.loginUser(this.user.email,this.user.hash);
        window.alert("You have Registered successfully!")
      }
      else{
        window.alert("Something Went Wrong")
      }
    })
    
  }
  loginUser(email : string , hash : string){
    
    event.preventDefault()

    this.login = ( new Login(email,hash));
    this.ldService.getUserLogin(this.login).subscribe(data => {
      console.log(data);
      if(JSON.parse(data.toString()) == true){
        this.rout.navigate(['/home']);
        this.auth.setLoggedIn(true);
        sessionStorage.setItem('login',JSON.stringify(this.login));
        this.uddService.getUserDetails(this.login).subscribe(data => {
          sessionStorage.setItem('userDetail',JSON.stringify(data));
        })
        
      }
      else{
        window.alert("Inavlid Details")
        this.auth.setLoggedIn(false);
        this.rout.navigate(['/']);
      }
    })

    }
      
  
}

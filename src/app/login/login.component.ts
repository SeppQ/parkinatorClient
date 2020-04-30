import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication/authentication.service';
import {Router} from '@angular/router';
import { Login } from '../DTO/Login';
import { LoginDataService } from 'src/app/services/login/login-data.service';
import { UserDetailsDataService } from '../services/user/user-details-data.service';
import { User } from '../DTO/User';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})




export class LoginComponent implements OnInit {
  login : Login ;
  username : string;
  hash : string;
  checkbox : boolean;
  user : User;
  
  constructor(
    private auth :AuthenticationService, 
    private ldService : LoginDataService, 
    private uddService : UserDetailsDataService, 
    private rout :Router
    ) { }

  ngOnInit() {

    if(sessionStorage.getItem('loggedIn').toString() == 'true'){
      this.rout.navigate(['/home'])
    }else{
      this.rout.navigate(['/'])
    }
    this.username = localStorage.getItem("remeber");
  }
  loginUser(){
    if(this.checkbox == true){
      localStorage.setItem("remeber" , this.username)
    }
    event.preventDefault()

    this.login = ( new Login(this.username,this.hash));
    this.ldService.getUserLogin(this.login).subscribe(data => {
      console.log(data);
      if(JSON.parse(data.toString()) == true){
        
        this.auth.setLoggedIn(true);
        sessionStorage.setItem('login',JSON.stringify(this.login));
        this.uddService.getUserDetails(this.login).subscribe(data => {
          
          sessionStorage.setItem('userDetail',JSON.stringify(data));
          this.user = <User>JSON.parse(sessionStorage.getItem('userDetail'));
          if(this.user.user_type == "admin"){
            this.rout.navigate(['/admin-dashboard'])
          }else{
          this.rout.navigate(['/home']);
          }
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


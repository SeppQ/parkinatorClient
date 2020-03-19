import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import {Router} from '@angular/router';
import { Login } from '../DTO/Login';
import { LoginDataService } from '../login-data.service';
import { UserDetailsDataService } from '../user-details-data.service';
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
  
  constructor(
    private auth :AuthenticationService, 
    private ldService : LoginDataService, 
    private uddService : UserDetailsDataService, 
    private rout :Router
    ) { }

  ngOnInit() {
    if(this.checkbox == true){
      localStorage.setItem("remeber" , this.username)
    }
    this.username = localStorage.getItem("remeber");
  }
  loginUser(){
    
    event.preventDefault()

    this.login = ( new Login(this.username,this.hash));
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


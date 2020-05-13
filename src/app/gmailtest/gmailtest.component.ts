import { Component, OnInit } from '@angular/core';
import { GmailAccount } from '../DTO/GmailAccount';
import { AuthenticationService } from '../services/authentication/authentication.service';
import { LoginDataService } from '../services/login/login-data.service';
import { UserDetailsDataService } from '../services/user/user-details-data.service';
import { Router } from '@angular/router';
import { GmailService } from '../services/gmail/gmail.service';

@Component({
  selector: 'app-gmailtest',
  templateUrl: './gmailtest.component.html',
  styleUrls: ['./gmailtest.component.css']
})
export class GmailtestComponent implements OnInit {

  gmailAccount : GmailAccount = null;
  
  constructor(
    private auth :AuthenticationService, 
    private ldService : LoginDataService, 
    private uddService : UserDetailsDataService, 
    private rout :Router,
    private gmService : GmailService
    ) { }

  ngOnInit() {
  }


  loginWithGmail(){
    this.gmService.getProfile().subscribe(data => {
      this.gmailAccount = (data);
    })
  }
}

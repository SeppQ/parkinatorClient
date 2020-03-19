import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Login } from '../DTO/Login';
import { Users } from '../DTO/Users';
import { Router } from '@angular/router';
import { RecoveryDataService } from '../recovery-data.service';
import { PasswordRecoveryDataService } from '../password-recovery-data.service';

@Component({
  selector: 'app-recovery',
  templateUrl: './recovery.component.html',
  styleUrls: ['./recovery.component.scss']
})
export class RecoveryComponent implements OnInit {

  constructor(
    private rdService: RecoveryDataService, 
    private prdService : PasswordRecoveryDataService, 
    private rout: Router
    ) { }
    
  email: string;
  recovery: Login;
  user: Users;
  checked: string;
  recoveryHTML: boolean;
  first: boolean = true;
  question: string;
  answer_hash: string;
  badEmail: boolean = false;
  newPasswordHTML: boolean;
  newPassword: string;
  RePassword: string;
  andValidator: boolean;
  ngOnInit() {

  }
  goBack() {
    this.rout.navigate(['/']);
  }

  checkEmail() {
    this.recovery = new Login(this.email, "")
    this.rdService.checkEmail(this.recovery).subscribe(data => {
      if (data.toString() != "false") {
        this.question = JSON.stringify(data).split(":")[1].split("}")[0].split('"')[1];
        console.log("found")
        this.recoveryHTML = true;
        this.first = false;
      } else {
        this.badEmail = true;
      }
    })
  }

  answerQuestion() {
    this.user = new Users(-1, "", this.email, "", "", "", this.answer_hash, false);
    this.prdService.checkQuestionAnswer(this.user).subscribe(data => {
      if (data.toString() === "true") {
        this.andValidator = true;
        this.newPasswordHTML = true;
        this.recoveryHTML = false;
        this.badEmail = false;
      }
    });
  }

  updatePassword() {
    this.user = new Users(-1, "", this.email, this.RePassword, "", "", this.answer_hash, false);
    this.prdService.UpdatePassword(this.user).subscribe(data => {
      this.rout.navigate(['/']);
      window.alert("Password Has Been Changed")
    })
  }
}

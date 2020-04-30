import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';
import { SupportService } from '../services/support/support.service';
import { Support } from '../DTO/Support';
import { User } from '../DTO/User';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css']
})
export class SupportComponent implements OnInit {

  constructor(private suppService : SupportService) { }
  message : string;
  title : string;
  date :string;
  sup : Support;
  myDate = new Date();
  user : User;
  ngOnInit() {
    this.user = <User>JSON.parse(sessionStorage.getItem('userDetail'));
  }
  sendTicket(){
    this.date = formatDate(this.myDate.setDate(this.myDate.getDate()), "yyyy-MM-dd", 'en');
    this.sup = new Support(0,this.title,this.message,this.date,this.user.user_id);
    this.suppService.sendTicket(this.sup).subscribe(data =>{
      console.log(data);
      window.location.reload();
    })
  }
}

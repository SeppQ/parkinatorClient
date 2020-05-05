import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';
import { SupportService } from '../services/support/support.service';
import { Support } from '../DTO/Support';
import { User } from '../DTO/User';
import { ServerMsg } from '../DTO/ServerMsg';

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
  tickets : Support[]
  msg: ServerMsg;
  ngOnInit() {
    this.user = <User>JSON.parse(sessionStorage.getItem('userDetail'));
    this.getTicketByUserId();
  }
  sendTicket(){
    this.date = formatDate(this.myDate.setDate(this.myDate.getDate()), "yyyy-MM-dd", 'en');
    this.sup = new Support(0,this.title,this.message,this.date,this.user.user_id,"Sent");
    this.suppService.sendTicket(this.sup).subscribe(data =>{
      this.msg = <ServerMsg>JSON.parse(JSON.stringify(data));
      console.log(this.msg.message);
      window.location.reload();
    })
  }

  getTicketByUserId(){
    this.sup = new Support(0,"","","2020-05-05",this.user.user_id,"Sent");
    this.suppService.getTicektsById(this.sup).subscribe(data =>{
      this.msg = <ServerMsg>JSON.parse(JSON.stringify(data));
      if(this.msg.status_code == -1){
        window.alert(this.msg.message)
      }else{
        this.tickets = JSON.parse(this.msg.message)
      }
     
    })
  }
}

import { Component, OnInit } from '@angular/core';
import { SupportService } from 'src/app/services/support/support.service';
import { Support } from 'src/app/DTO/Support';
import { ServerMsg } from 'src/app/DTO/ServerMsg';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  constructor(private suppService: SupportService) { }
  tickets: Support[];
  msg: ServerMsg;
  ngOnInit() {
    this.getAllTicekts();
    
    
  }
  getAllTicekts() {
    this.suppService.getTicekts().subscribe(data => {
      this.tickets = data;

    })
  }
  removeTicket(id : number){
    let sup = new Support(id,"","","",0);
    this.suppService.removeTickets(sup).subscribe(data =>{
      window.location.reload();
    })
  }  
}

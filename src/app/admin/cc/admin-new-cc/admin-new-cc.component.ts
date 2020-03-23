import { Component, OnInit } from '@angular/core';
import { Cc } from 'src/app/DTO/Cc';
import { CcDataService } from 'src/app/services/cc/cc-data.service';
 
@Component({
  selector: 'app-admin-new-cc',
  templateUrl: './admin-new-cc.component.html',
  styleUrls: ['./admin-new-cc.component.css']
})
export class AdminNewCcComponent implements OnInit {

  cc : Cc;

  constructor(private udService :CcDataService) { }

  ngOnInit() {

    this.cc = new Cc("",0);
  }

  addNew(){
    this.udService.createCc(this.cc).subscribe();
    //window.location.reload();
  }

  openNew(){
    this.cc = new Cc("",0);
  }

}

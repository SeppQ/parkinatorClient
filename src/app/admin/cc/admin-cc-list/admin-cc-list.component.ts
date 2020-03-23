import { Component, OnInit, Output, EventEmitter, Injectable } from '@angular/core';
import { Cc } from 'src/app/DTO/Cc';
import { CcDataService } from 'src/app/services/cc/cc-data.service';
 

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-admin-cc-list',
  templateUrl: './admin-cc-list.component.html',
  styleUrls: ['./admin-cc-list.component.css']
})
export class AdminCcListComponent implements OnInit {

  @Output() selectedCc = new EventEmitter<Cc>();
  selectedCcID : number;
  ccs: Cc[] = [];
  errorMsg :String = null;
  cc_id : number;

  constructor(private ccService :CcDataService) { }


  ngOnInit() {
    this.ccService.readCc().subscribe( data => {
      
      console.log(data.toString());
      this.ccs = data;

      this.ccs.forEach(element => {
      console.log(element);
      });
      this.errorMsg = null;
    },
    err=> {console.log("Error = ", err.message);
      this.errorMsg = err.message});
  }

  ccSelected(i : number){
    console.log("Cc ID = " + i);
    this.selectedCc.emit(this.ccs.find(cc => cc.cc_id === i));    
    this.selectedCcID = i;
  }

  trackByFn(index, item) {

    return ; // or item.id

  }

}

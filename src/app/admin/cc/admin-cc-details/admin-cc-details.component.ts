import { Component, OnInit, Input } from '@angular/core';
import { AdminCcListComponent } from '../admin-cc-list/admin-cc-list.component';
import { NgForm } from '@angular/forms';
import { Cc } from 'src/app/DTO/Cc';
import { CcDataService } from 'src/app/services/cc/cc-data.service';

@Component({
  selector: 'app-admin-cc-details',
  templateUrl: './admin-cc-details.component.html',
  styleUrls: ['./admin-cc-details.component.css']
})
export class AdminCcDetailsComponent implements OnInit {

  @Input() cc:Cc;
  notEditable : boolean = true;
  buttonText : string = "Edit"; 
  newCcs : Cc[] = [];

  constructor(private cdService : CcDataService, private cl : AdminCcListComponent) { }

  ngOnInit() {
    this.cc = new Cc ("",0);
  }
//
  onSubmit( details : NgForm ) {
    if(this.notEditable) {
      this.notEditable = false;
      this.buttonText = "Save";
    }
    else{
      this.notEditable = true;
      this.buttonText = "Edit";

      let changed : boolean = false;
      for(let key in details.value) 
      {
        if(details.value[key].length !=0)
        {
          changed = true;
          this.cc[key] = details.value[key];
        }
      }
      //this signifies in the json string that the put should be used to update the cc
      this.cdService.updateCc(this.cc);
      //just for safety, the value is removed from the cc
    }
  }

  onSubmit2( details : NgForm ) {
    event.defaultPrevented;
    //this signifies in the json string that the put should be used to delete the cc
      this.cdService.deleteCc(this.cc.cc_id);
      //just for safety, the value is removed from the cc
      this.cl.ccs.forEach(element => {
        if(element.cc_id!=this.cc.cc_id){
          this.newCcs.push(element);
        }
      });
      this.cl.ccs = this.newCcs;
      window.location.reload();
  }

}

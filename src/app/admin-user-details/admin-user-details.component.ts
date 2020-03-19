import { Component, OnInit, Input } from '@angular/core';
import { User } from '../DTO/User';
import { UserDataService } from '../user-data.service';
import { AdminUserListComponent } from '../admin-user-list/admin-user-list.component';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-admin-user-details',
  templateUrl: './admin-user-details.component.html',
  styleUrls: ['./admin-user-details.component.css']
})
export class AdminUserDetailsComponent implements OnInit {

  ngOnInit() {
    this.user = new User (0,"","","","","","",false);
  }

  @Input() user:User;
  notEditable : boolean = true;
  buttonText : string = "Edit";
  newUsers : User[] = [];

  constructor(private udService : UserDataService, private aulComp : AdminUserListComponent) { }

  
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
          this.user[key] = details.value[key];
        }
      }
      //this signifies in the json string that the put should be used to update the user
      this.udService.updateUser(this.user);
    }
  }

  onSubmit2( details : NgForm ) {
    event.defaultPrevented;
    //this signifies in the json string that the put should be used to delete the user
      this.udService.deleteUser(this.user.user_id);
      //just for safety, the value is removed from the user
      this.aulComp.users.forEach(element => {
        if(element.user_id!=this.user.user_id){
          this.newUsers.push(element);
        }
      });
      this.aulComp.users = this.newUsers;
  }

}

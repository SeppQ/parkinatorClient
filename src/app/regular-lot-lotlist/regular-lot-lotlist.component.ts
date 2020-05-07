import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Lots } from '../DTO/Lots';
import { User } from '../DTO/User';
import { LotsService } from '../services/lots/lots.service';

@Component({
  selector: 'app-regular-lot-lotlist',
  templateUrl: './regular-lot-lotlist.component.html',
  styleUrls: ['./regular-lot-lotlist.component.css']
})
export class RegularLotLotlistComponent implements OnInit {

  @Output() selectedLot = new EventEmitter<Lots>();
  selectedLotID : number;
  user: User;
  lots: Lots[] = [];
  errorMsg :String = null;
  lot_id : number;

  constructor(private lotsService :LotsService) { }


  ngOnInit() {
    this.user = <User>JSON.parse(sessionStorage.getItem('userDetail'));
    this.lotsService.getCarParkLotsByUser(this.user.user_id).subscribe( data => {
      
      console.log(data.toString());
      this.lots = data;

      this.lots.forEach(element => {
      console.log(element);
      });
      this.errorMsg = null;
    },
    err=> {console.log("Error = ", err.message);
      this.errorMsg = err.message});
  }

  lotSelected(i : number){
    console.log("Lot ID = " + i);
    this.selectedLot.emit(this.lots.find(lot => lot.lot_id === i));    
    this.selectedLotID = i;
  }

  trackByFn(index, item) {

    return ; // or item.id

  }

}

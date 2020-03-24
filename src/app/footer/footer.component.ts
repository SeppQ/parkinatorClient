import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }
  date :string;
  myDate = new Date();
  ngOnInit() {
    this.date = formatDate(this.myDate.setDate(this.myDate.getDate()), "yyyy", 'en');
    
  }

}

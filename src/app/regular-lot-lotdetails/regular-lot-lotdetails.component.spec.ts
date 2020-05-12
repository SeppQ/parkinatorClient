import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegularLotLotdetailsComponent } from './regular-lot-lotdetails.component';

describe('RegularLotLotdetailsComponent', () => {
  let component: RegularLotLotdetailsComponent;
  let fixture: ComponentFixture<RegularLotLotdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegularLotLotdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegularLotLotdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

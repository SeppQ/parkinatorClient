import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegularLotZonedetailsComponent } from './regular-lot-zonedetails.component';

describe('RegularLotZonedetailsComponent', () => {
  let component: RegularLotZonedetailsComponent;
  let fixture: ComponentFixture<RegularLotZonedetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegularLotZonedetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegularLotZonedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

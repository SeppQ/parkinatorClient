import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminParkinglotsDetailsComponent } from './admin-parkinglots-details.component';

describe('AdminParkinglotsDetailsComponent', () => {
  let component: AdminParkinglotsDetailsComponent;
  let fixture: ComponentFixture<AdminParkinglotsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminParkinglotsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminParkinglotsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

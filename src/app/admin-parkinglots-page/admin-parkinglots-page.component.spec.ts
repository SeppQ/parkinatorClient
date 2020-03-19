import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminParkinglotsPageComponent } from './admin-parkinglots-page.component';

describe('AdminParkinglotsPageComponent', () => {
  let component: AdminParkinglotsPageComponent;
  let fixture: ComponentFixture<AdminParkinglotsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminParkinglotsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminParkinglotsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

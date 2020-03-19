import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminParkingzonesDetailsComponent } from './admin-parkingzones-details.component';

describe('AdminParkingzonesDetailsComponent', () => {
  let component: AdminParkingzonesDetailsComponent;
  let fixture: ComponentFixture<AdminParkingzonesDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminParkingzonesDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminParkingzonesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

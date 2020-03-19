import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminParkingzonesListComponent } from './admin-parkingzones-list.component';

describe('AdminParkingzonesListComponent', () => {
  let component: AdminParkingzonesListComponent;
  let fixture: ComponentFixture<AdminParkingzonesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminParkingzonesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminParkingzonesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

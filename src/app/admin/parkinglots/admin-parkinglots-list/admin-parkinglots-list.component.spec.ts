import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminParkinglotsListComponent } from './admin-parkinglots-list.component';

describe('AdminParkinglotsListComponent', () => {
  let component: AdminParkinglotsListComponent;
  let fixture: ComponentFixture<AdminParkinglotsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminParkinglotsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminParkinglotsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

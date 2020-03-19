import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminParkingzonesPageComponent } from './admin-parkingzones-page.component';

describe('AdminParkingzonesPageComponent', () => {
  let component: AdminParkingzonesPageComponent;
  let fixture: ComponentFixture<AdminParkingzonesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminParkingzonesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminParkingzonesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

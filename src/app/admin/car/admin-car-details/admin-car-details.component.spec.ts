import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCarDetailsComponent } from './admin-car-details.component';

describe('AdminCarDetailsComponent', () => {
  let component: AdminCarDetailsComponent;
  let fixture: ComponentFixture<AdminCarDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCarDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCarDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

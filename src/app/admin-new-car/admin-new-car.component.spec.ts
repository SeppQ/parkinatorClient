import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNewCarComponent } from './admin-new-car.component';

describe('AdminNewCarComponent', () => {
  let component: AdminNewCarComponent;
  let fixture: ComponentFixture<AdminNewCarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminNewCarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminNewCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

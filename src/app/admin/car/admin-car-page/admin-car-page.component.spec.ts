import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCarPageComponent } from './admin-car-page.component';

describe('AdminCarPageComponent', () => {
  let component: AdminCarPageComponent;
  let fixture: ComponentFixture<AdminCarPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCarPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCarPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

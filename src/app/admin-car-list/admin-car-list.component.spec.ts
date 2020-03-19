import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCarListComponent } from './admin-car-list.component';

describe('AdminCarListComponent', () => {
  let component: AdminCarListComponent;
  let fixture: ComponentFixture<AdminCarListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCarListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCarListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

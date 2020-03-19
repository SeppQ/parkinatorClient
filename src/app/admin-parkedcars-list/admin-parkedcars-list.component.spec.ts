import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminParkedcarsListComponent } from './admin-parkedcars-list.component';

describe('AdminParkedcarsListComponent', () => {
  let component: AdminParkedcarsListComponent;
  let fixture: ComponentFixture<AdminParkedcarsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminParkedcarsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminParkedcarsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminParkedcarsDetailsComponent } from './admin-parkedcars-details.component';

describe('AdminParkedcarsDetailsComponent', () => {
  let component: AdminParkedcarsDetailsComponent;
  let fixture: ComponentFixture<AdminParkedcarsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminParkedcarsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminParkedcarsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

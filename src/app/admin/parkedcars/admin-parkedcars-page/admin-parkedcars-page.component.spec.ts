import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminParkedcarsPageComponent } from './admin-parkedcars-page.component';

describe('AdminParkedcarsPageComponent', () => {
  let component: AdminParkedcarsPageComponent;
  let fixture: ComponentFixture<AdminParkedcarsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminParkedcarsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminParkedcarsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

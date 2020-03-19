import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCcDetailsComponent } from './admin-cc-details.component';

describe('AdminCcDetailsComponent', () => {
  let component: AdminCcDetailsComponent;
  let fixture: ComponentFixture<AdminCcDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCcDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCcDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

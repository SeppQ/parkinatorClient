import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCcPageComponent } from './admin-cc-page.component';

describe('AdminCcPageComponent', () => {
  let component: AdminCcPageComponent;
  let fixture: ComponentFixture<AdminCcPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCcPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCcPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

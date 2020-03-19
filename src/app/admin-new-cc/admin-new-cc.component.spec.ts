import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNewCcComponent } from './admin-new-cc.component';

describe('AdminNewCcComponent', () => {
  let component: AdminNewCcComponent;
  let fixture: ComponentFixture<AdminNewCcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminNewCcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminNewCcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

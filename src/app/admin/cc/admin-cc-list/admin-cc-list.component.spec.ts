import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCcListComponent } from './admin-cc-list.component';

describe('AdminCcListComponent', () => {
  let component: AdminCcListComponent;
  let fixture: ComponentFixture<AdminCcListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCcListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCcListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

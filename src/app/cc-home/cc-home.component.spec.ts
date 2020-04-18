import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CcHomeComponent } from './cc-home.component';

describe('CcHomeComponent', () => {
  let component: CcHomeComponent;
  let fixture: ComponentFixture<CcHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CcHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CcHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

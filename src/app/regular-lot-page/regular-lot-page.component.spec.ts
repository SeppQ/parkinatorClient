import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegularLotPageComponent } from './regular-lot-page.component';

describe('RegularLotPageComponent', () => {
  let component: RegularLotPageComponent;
  let fixture: ComponentFixture<RegularLotPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegularLotPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegularLotPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

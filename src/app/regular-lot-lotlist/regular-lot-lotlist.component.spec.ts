import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegularLotLotlistComponent } from './regular-lot-lotlist.component';

describe('RegularLotLotlistComponent', () => {
  let component: RegularLotLotlistComponent;
  let fixture: ComponentFixture<RegularLotLotlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegularLotLotlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegularLotLotlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

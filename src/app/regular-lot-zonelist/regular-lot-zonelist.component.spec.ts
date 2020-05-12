import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegularLotZonelistComponent } from './regular-lot-zonelist.component';

describe('RegularLotZonelistComponent', () => {
  let component: RegularLotZonelistComponent;
  let fixture: ComponentFixture<RegularLotZonelistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegularLotZonelistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegularLotZonelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

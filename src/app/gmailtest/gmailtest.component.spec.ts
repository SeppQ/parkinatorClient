import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GmailtestComponent } from './gmailtest.component';

describe('GmailtestComponent', () => {
  let component: GmailtestComponent;
  let fixture: ComponentFixture<GmailtestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GmailtestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GmailtestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

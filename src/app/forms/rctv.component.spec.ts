import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RctvComponent } from './rctv.component';

describe('RctvComponent', () => {
  let component: RctvComponent;
  let fixture: ComponentFixture<RctvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RctvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RctvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TmpDrvnComponent } from './tmp-drvn.component';

describe('TmpDrvnComponent', () => {
  let component: TmpDrvnComponent;
  let fixture: ComponentFixture<TmpDrvnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TmpDrvnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TmpDrvnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

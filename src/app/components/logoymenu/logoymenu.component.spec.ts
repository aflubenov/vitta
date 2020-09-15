import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoymenuComponent } from './logoymenu.component';

describe('LogoymenuComponent', () => {
  let component: LogoymenuComponent;
  let fixture: ComponentFixture<LogoymenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogoymenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoymenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

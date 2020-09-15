import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionFilosofiaComponent } from './seccion-filosofia.component';

describe('SeccionFilosofiaComponent', () => {
  let component: SeccionFilosofiaComponent;
  let fixture: ComponentFixture<SeccionFilosofiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeccionFilosofiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeccionFilosofiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

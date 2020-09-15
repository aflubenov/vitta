import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FomrularioContactoComponent } from './fomrulario-contacto.component';

describe('FomrularioContactoComponent', () => {
  let component: FomrularioContactoComponent;
  let fixture: ComponentFixture<FomrularioContactoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FomrularioContactoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FomrularioContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

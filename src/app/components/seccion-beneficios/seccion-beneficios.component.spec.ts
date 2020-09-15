import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionBeneficiosComponent } from './seccion-beneficios.component';

describe('SeccionBeneficiosComponent', () => {
  let component: SeccionBeneficiosComponent;
  let fixture: ComponentFixture<SeccionBeneficiosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeccionBeneficiosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeccionBeneficiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

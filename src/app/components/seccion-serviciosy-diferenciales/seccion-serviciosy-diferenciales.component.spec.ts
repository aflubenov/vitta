import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionServiciosyDiferencialesComponent } from './seccion-serviciosy-diferenciales.component';

describe('SeccionServiciosyDiferencialesComponent', () => {
  let component: SeccionServiciosyDiferencialesComponent;
  let fixture: ComponentFixture<SeccionServiciosyDiferencialesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeccionServiciosyDiferencialesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeccionServiciosyDiferencialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

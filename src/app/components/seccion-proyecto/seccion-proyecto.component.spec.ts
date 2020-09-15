import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionProyectoComponent } from './seccion-proyecto.component';

describe('SeccionProyectoComponent', () => {
  let component: SeccionProyectoComponent;
  let fixture: ComponentFixture<SeccionProyectoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeccionProyectoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeccionProyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

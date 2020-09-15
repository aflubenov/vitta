import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BloqueInfoProyectoComponent } from './bloque-info-proyecto.component';

describe('BloqueInfoProyectoComponent', () => {
  let component: BloqueInfoProyectoComponent;
  let fixture: ComponentFixture<BloqueInfoProyectoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BloqueInfoProyectoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BloqueInfoProyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

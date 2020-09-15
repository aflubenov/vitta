import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionMapaComponent } from './seccion-mapa.component';

describe('SeccionMapaComponent', () => {
  let component: SeccionMapaComponent;
  let fixture: ComponentFixture<SeccionMapaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeccionMapaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeccionMapaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

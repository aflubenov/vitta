import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionSitaComponent } from './seccion-sita.component';

describe('SeccionSitaComponent', () => {
  let component: SeccionSitaComponent;
  let fixture: ComponentFixture<SeccionSitaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeccionSitaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeccionSitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

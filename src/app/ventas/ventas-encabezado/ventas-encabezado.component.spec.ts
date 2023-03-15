import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentasEncabezadoComponent } from './ventas-encabezado.component';

describe('VentasEncabezadoComponent', () => {
  let component: VentasEncabezadoComponent;
  let fixture: ComponentFixture<VentasEncabezadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VentasEncabezadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VentasEncabezadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprasEncabezadoComponent } from './compras-encabezado.component';

describe('ComprasEncabezadoComponent', () => {
  let component: ComprasEncabezadoComponent;
  let fixture: ComponentFixture<ComprasEncabezadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComprasEncabezadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComprasEncabezadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { VentasDetalleComponent } from './ventas-detalle/ventas-detalle.component';
import { VentasEncabezadoComponent } from './ventas-encabezado/ventas-encabezado.component';



@NgModule({
  declarations: [
    VentasDetalleComponent,
    VentasEncabezadoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule
  ],
  exports: [
    VentasDetalleComponent,
    VentasEncabezadoComponent
  ]
})
export class VentasModule { }

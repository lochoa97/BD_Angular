import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ComprasDetalleComponent } from './compras-detalle/compras-detalle.component';
import { ComprasEncabezadoComponent } from './compras-encabezado/compras-encabezado.component';



@NgModule({
  declarations: [
    ComprasDetalleComponent,
    ComprasEncabezadoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule
  ],
  exports:[
    ComprasDetalleComponent,
    ComprasEncabezadoComponent
  ]
})
export class ComprasModule { }

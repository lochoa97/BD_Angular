import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormularioProductoComponent } from './formulario-producto/formulario-producto.component';
import { FormularioUsuarioComponent } from './formulario-usuario/formulario-usuario.component';



@NgModule({
  declarations: [
    FormularioProductoComponent,
    FormularioUsuarioComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule
  ],
  exports: [
    FormularioProductoComponent,
    FormularioUsuarioComponent
  ]
})
export class FormulariosModule { }

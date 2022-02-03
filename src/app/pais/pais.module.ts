import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PorPaisComponent } from './pages/por-pais/por-pais.component';
import { DetallesPaisComponent } from './pages/detalles-pais/detalles-pais.component';



@NgModule({
  declarations: [
    PorPaisComponent,
    DetallesPaisComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PorPaisComponent,
    DetallesPaisComponent
  ]
})
export class PaisModule { }

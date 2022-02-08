import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PorPaisComponent } from './pages/por-pais/por-pais.component';
import { DetallesPaisComponent } from './pages/detalles-pais/detalles-pais.component';
import { PorCapitalComponent } from './pages/por-capital/por-capital.component';
import { PorRegionComponent } from './pages/por-region/por-region.component';


@NgModule({
  declarations: [
    PorPaisComponent,
    DetallesPaisComponent,
    PorCapitalComponent,
    PorRegionComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    PorPaisComponent,
    DetallesPaisComponent,
    PorCapitalComponent,
    PorRegionComponent
  ]
})
export class PaisModule { }

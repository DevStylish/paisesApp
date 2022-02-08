import { Component, OnInit } from '@angular/core';

import { PaisService } from 'src/app/services/pais.service';
import { Pais } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css']
})
export class PorRegionComponent implements OnInit {

  region = '';
  paises: Pais[] = [];

  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
  }

  buscarPorRegion(textRegion: string){
    this.region = textRegion;
    this.paisService.buscarPaisPorRegion(textRegion).subscribe((obj) =>{
      this.paises = obj;
    });
  }
}

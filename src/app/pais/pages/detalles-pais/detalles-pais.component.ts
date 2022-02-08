import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../../services/pais.service';

@Component({
  selector: 'app-detalles-pais',
  templateUrl: './detalles-pais.component.html',
  styleUrls: ['./detalles-pais.component.css']
})
export class DetallesPaisComponent implements OnInit {

  pais!: Pais;

  constructor(private route: Router, private paisService: PaisService) {}

  ngOnInit(): void {
    this.obtenerPais();
  }

  get translations(){
    return Object.values(this.pais['translations']);
  }

  obtenerPais(){
    let cioc = this.route.url.split("/")[2];
    console.log(cioc)
    this.paisService.buscarPaisByCIOC(cioc).subscribe((objPais) =>{
      this.pais = objPais[0];
    });
  }
}

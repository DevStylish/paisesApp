import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../../services/pais.service';
import { Pais } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent implements OnInit {

  pais = "";
  paises: Pais[] = [];
  ultPaises: Pais[] = [];

  constructor(private paisService: PaisService) { }

  ngOnInit(): void { }

  obtenerPaises() {
    if(this.pais !== ""){
      this.paisService.buscarPaises(this.pais).subscribe((objPaises) => {
        if(objPaises.length > 10){
          this.paises = objPaises.slice(0,9);
        }else{
          this.paises = objPaises;
        }
      });
    }
  }

  detallesPais(){
    
  }

  mostrarPaises(){
    this.paisService.buscarPaises(this.pais).subscribe((objPaises) => {
      this.ultPaises = objPaises;
    });
  }
}

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

  constructor(private paisService: PaisService) { }

  ngOnInit(): void { }

  buscarPais() {
    this.paisService.buscarPaises(this.pais).subscribe((objPaises) => {
      this.paises = objPaises;
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { PaisService } from 'src/app/services/pais.service';
import { Pais } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent implements OnInit {

  capital = '';

  paises: Pais[] = [];

  constructor(private paisService: PaisService) { }

  ngOnInit(): void {}

  buscarCapital(){
    if(this.capital !== ""){
      this.paisService.buscarPaisPorCapital(this.capital).subscribe((obj) => {
        this.paises = obj;
      });
    }
  }

}

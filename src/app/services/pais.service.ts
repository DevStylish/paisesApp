import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';
import { Pais } from '../pais/interfaces/pais.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private urlApi: string = "https://restcountries.com/v3.1/";
  private resultados: any[] = [];

  constructor(private http: HttpClient) { }

  get httpParams() {
    return new HttpParams().set("fields", "name,capital,cioc,flags,population");
  }

  buscarPaises(paisText: string): Observable<Pais[]> {
    let url = `${this.urlApi}/name/${paisText}`;

    return this.http.get<Pais[]>(url, {});
  }

  buscarPaisByCIOC(paisCioc: string): Observable<Pais[]>{
    let url = `${this.urlApi}/alpha/${paisCioc}`;

    return this.http.get<Pais[]>(url, {});
  }

  buscarPaisPorRegion(region: string): Observable<Pais[]>{
    let url = `${this.urlApi}/region/${region}`;

    return this.http.get<Pais[]>(url, {});
  }

  buscarPaisPorCapital(capital: string): Observable<Pais[]>{
    let url = `${this.urlApi}/capital/${capital}`;

    return this.http.get<Pais[]>(url, {});
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tarjeta } from '../models/tarjeta';

@Injectable({
  providedIn: 'root'
})
export class TarjetaService {

  urlbase = 'http://localhost:3000/api/tarjeta/';
  constructor(private http: HttpClient) { 
  }

  public listadeTarjeta(): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({ })
    };
    return this.http.get(this.urlbase, httpOptions);
  }

  public agregarTarjeta(tarjeta: Tarjeta): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    const body = JSON.stringify(tarjeta);
    return this.http.post(this.urlbase, body , httpOptions);
  }

  public ModificarTarjeta(tarjeta: Tarjeta): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    const body = JSON.stringify(tarjeta);
    return this.http.put(this.urlbase + tarjeta._id, body , httpOptions);
  }

  public EliminarTarjeta(id: string): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
      })
    };
    return this.http.delete(this.urlbase + id, httpOptions);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pago } from '../models/pago';

@Injectable({
  providedIn: 'root'
})
export class PagoService {

  urlbase = 'http://localhost:3000/api/pago/';
  constructor(private http: HttpClient) { }

  public listadepago(): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({ })
    };
    return this.http.get(this.urlbase, httpOptions);
  }

  public agregarPago(pago: Pago): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    const body = JSON.stringify(pago);
    return this.http.post(this.urlbase, body , httpOptions);
  }

  public ModificarPago(pago: Pago): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    const body = JSON.stringify(pago);
    return this.http.put(this.urlbase + pago.id, body , httpOptions);
  }

  public EliminarPago(id: string): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
      })
    };
    return this.http.delete(this.urlbase + id, httpOptions);
  }
}

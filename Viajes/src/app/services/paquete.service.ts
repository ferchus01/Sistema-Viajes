import {HttpClient, HttpHeaders} from '@angular/common/http';
import {observable, Observable, from, of} from 'rxjs';
import { Injectable } from '@angular/core';
import { Paquete } from '../models/paquete';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaqueteService {

  urlBase = 'http://localhost:3000/api/paquete/';
  // tslint:disable-next-line: variable-name
  constructor(private _http: HttpClient) { }

  public agregarAsis(paq: Paquete): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    const body = JSON.stringify(paq);
    return this._http.post(this.urlBase, body , httpOptions).pipe(
      catchError(error =>
        {
        return of (error);
        })
    );
  }
  public actualizarT(): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
      })
    };
    return this._http.get(this.urlBase, httpOptions);
  }

  public EliminarA(paq: Paquete): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
      })
    };
    return this._http.delete(this.urlBase + paq._id, httpOptions);
  }
  public modificar(paq: Paquete): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    const body = JSON.stringify(paq);
    return this._http.put(this.urlBase + paq._id, body , httpOptions);
  }
}

import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {observable, Observable} from 'rxjs';
import { Reserva } from '../models/reserva';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {

  urlBase = 'http://localhost:3000/api/reserva/';

  // tslint:disable-next-line: variable-name
  constructor(private _http: HttpClient) { }

  public agregarResv(rev: Reserva): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    const body = JSON.stringify(rev);
    return this._http.post(this.urlBase, body , httpOptions);
  }

  public actualizarT(): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
      })
    };

    return this._http.get(this.urlBase, httpOptions);
  }
}

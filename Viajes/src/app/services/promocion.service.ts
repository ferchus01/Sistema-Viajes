import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Promocion } from '../models/promocion';

@Injectable({
  providedIn: 'root'
})
export class PromocionService {

  urlbase = 'http://localhost:3000/api/promocion/';
  constructor(private http: HttpClient) { }

  public listadePromocion(): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({ })
    };
    return this.http.get(this.urlbase, httpOptions);
  }

  public agregarPromocion(promocion: Promocion): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    const body = JSON.stringify(promocion);
    return this.http.post(this.urlbase, body , httpOptions);
  }

  public ModificarPromocion(promocion: Promocion): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    const body = JSON.stringify(promocion);
    return this.http.put(this.urlbase + promocion._id, body , httpOptions);
  }

  public EliminarPromocion(id: string): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
      })
    };
    return this.http.delete(this.urlbase + id, httpOptions);
  }
}

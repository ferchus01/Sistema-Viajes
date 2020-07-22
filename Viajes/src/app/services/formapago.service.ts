import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Formapago } from '../models/formapago';

@Injectable({
  providedIn: 'root'
})
export class FormapagoService {

  urlbase = 'http://localhost:3000/api/formapago/';
  constructor(private http: HttpClient) { }

  public listadepago(): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({ })
    };
    return this.http.get(this.urlbase, httpOptions);
  }

  public agregarFormaPago(frmpago: Formapago): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    const body = JSON.stringify(frmpago);
    return this.http.put(this.urlbase, body , httpOptions);
  }

  public ModificarFormaPago(frmpago: Formapago): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    const body = JSON.stringify(frmpago);
    return this.http.put(this.urlbase + frmpago._id, body , httpOptions);
  }

  public EliminarFormaPago(id: string): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
      })
    };
    return this.http.delete(this.urlbase + id, httpOptions);
  }
}

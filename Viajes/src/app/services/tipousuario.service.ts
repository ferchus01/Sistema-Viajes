import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TipoUsuario } from '../models/tipo-usuario';

@Injectable({
  providedIn: 'root'
})
export class TipousuarioService {

  urlbase = 'http://localhost:3000/api/tipousuario/';
  constructor(private http: HttpClient) { }

  public listadeTipoUsuario(): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({ })
    };
    return this.http.get(this.urlbase, httpOptions);
  }

  public agregarTipoUsuario(tipos: TipoUsuario): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    const body = JSON.stringify(tipos);
    return this.http.post(this.urlbase, body , httpOptions);
  }

  public ModificarTipoUsuario(tipos: TipoUsuario): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    const body = JSON.stringify(tipos);
    return this.http.put(this.urlbase + tipos.id, body , httpOptions);
  }

  public EliminarTipoUsuario(id: string): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
      })
    };
    return this.http.delete(this.urlbase + id, httpOptions);
  }
}

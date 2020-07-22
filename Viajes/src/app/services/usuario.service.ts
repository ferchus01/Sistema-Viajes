import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from '../models/usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usuarioLogeado: Usuario;
  usuariologIn = false;
  urlbase = 'http://localhost:3000/api/usuario/';
  // tslint:disable-next-line: variable-name
  constructor(private _http: HttpClient) {
    this.usuarioLogeado = new Usuario();
   }

  public listaUsuario(): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({ })
    };
    return this._http.get(this.urlbase, httpOptions);
  }

  public agregarUsuario(usuario: Usuario): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    const body = JSON.stringify(usuario);
    return this._http.post(this.urlbase, body , httpOptions);
  }

  public ModificarUsuario(usuario: Usuario): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    const body = JSON.stringify(usuario);
    return this._http.put(this.urlbase + usuario._id, body , httpOptions);
  }

  public EliminarUsuario(id: string): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
      })
    };
    return this._http.delete(this.urlbase + id, httpOptions);
  }
  public login(nombreusuarios: string, passwords: string): Observable<any>
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    const body = JSON.stringify( {nombreusuario: nombreusuarios, password : passwords});
    return this._http.post(this.urlbase + 'login', body, httpOptions);
  }
  public logeout()
  {
    this.usuariologIn = false;
    this.usuarioLogeado = new Usuario();
  }
}

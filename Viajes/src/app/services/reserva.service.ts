import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {observable,Observable} from 'rxjs'
import { Reserva } from '../models/reserva';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {

  urlBase:string ="http://localhost:3000/api/reserva/";

  constructor(private _http:HttpClient) { }

  public agregarResv(rev:Reserva):Observable<any>{
    const httpOptions={
      headers: new HttpHeaders({
        "Content-Type":"application/json"
      })
    };
    var body=JSON.stringify(rev);
    return this._http.post(this.urlBase,body ,httpOptions);
  }
  
  public actualizarT():Observable<any>{
    const httpOptions={
      headers: new HttpHeaders({
        
      })
    };
    
    return this._http.get(this.urlBase,httpOptions);
  }
}

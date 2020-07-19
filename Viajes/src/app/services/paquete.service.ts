import {HttpClient,HttpHeaders} from '@angular/common/http';
import {observable,Observable} from 'rxjs'
import { Injectable } from '@angular/core';
import { Paquete } from '../models/paquete';

@Injectable({
  providedIn: 'root'
})
export class PaqueteService {

  urlBase:string ="http://localhost:3000/api/Paquete/";

  constructor(private _http:HttpClient) { }

  public agregarAsis(paq:Paquete):Observable<any>{
    const httpOptions={
      headers: new HttpHeaders({
        "Content-Type":"application/json"
      })
    };
    var body=JSON.stringify(paq);
    return this._http.post(this.urlBase, body ,httpOptions);
  }
  
  public actualizarT():Observable<any>{
    const httpOptions={
      headers: new HttpHeaders({
        
      })
    };
    
    return this._http.get(this.urlBase,httpOptions);
  }

  public EliminarA(paq:Paquete):Observable<any>{
    const httpOptions={
      headers: new HttpHeaders({
        
      })
    };
    return this._http.delete(this.urlBase+paq.id,httpOptions);
  }
  
  public modificar(paq:Paquete):Observable<any>{
    const httpOptions={
      headers: new HttpHeaders({
        "Content-Type":"application/json"
      })
    };
    var body=JSON.stringify(paq);
    return this._http.put(this.urlBase+paq.id, body ,httpOptions); 
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProveedorTransporte } from '../models/proveedor-transporte';

@Injectable({
  providedIn: 'root'
})
export class ProveedorTransporteService {

  urlbase =  'http://localhost:3000/api/transporte/' 
  constructor(private http: HttpClient) { }

  public listaTransporte():Observable<any>{
    const httpOptions={
      headers: new HttpHeaders({ })
    };
    return this.http.get(this.urlbase, httpOptions);
  }

  public agregarTransporte(proveedor:ProveedorTransporte):Observable<any>{
    const httpOptions={
      headers: new HttpHeaders({
        "Content-Type":"application/json"
      })
    };
    var body=JSON.stringify(proveedor);
    return this.http.put(this.urlbase,body ,httpOptions);
  }

  public ModificarTransporte(proveedor:ProveedorTransporte):Observable<any>{
    const httpOptions={
      headers: new HttpHeaders({
        "Content-Type":"application/json"
      })
    };
    var body=JSON.stringify(proveedor);
    return this.http.post(this.urlbase+proveedor.id,body ,httpOptions);
  }  
  
  public EliminarTransporte(id : string):Observable<any>{
    const httpOptions={
      headers: new HttpHeaders({
      })
    };
    return this.http.delete(this.urlbase+id,httpOptions);
  }
}

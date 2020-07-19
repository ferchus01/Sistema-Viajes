import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProveedorAlojamiento } from '../models/proveedor-alojamiento';

@Injectable({
  providedIn: 'root'
})
export class ProveedorAlojamientoService {

  urlBase = 'http://localhost:3000/api/alojamiento/';
  constructor(private http : HttpClient) { }

public listaPaProveedoresAlojamiento(): Observable<any>{
    const httpOptions={
      headers: new HttpHeaders({
        
      })
    };
    
    return this.http.get(this.urlBase,httpOptions);
  }
  public agregarAlojamiento(proveedor:ProveedorAlojamiento):Observable<any>{
    const httpOptions={
      headers: new HttpHeaders({
        "Content-Type":"application/json"
      })
    };
    var body=JSON.stringify(proveedor);
    return this.http.put(this.urlBase,body ,httpOptions);
  }
  public ModificarAlojamiento(proveedor:ProveedorAlojamiento):Observable<any>{
    const httpOptions={
      headers: new HttpHeaders({
        "Content-Type":"application/json"
      })
    };
    var body=JSON.stringify(proveedor);
    return this.http.post(this.urlBase+proveedor.id,body ,httpOptions);

  }  public EliminarAlojamiento(id : string):Observable<any>{
    const httpOptions={
      headers: new HttpHeaders({
      })
    };
    
    return this.http.delete(this.urlBase+id,httpOptions);
  }
  
}

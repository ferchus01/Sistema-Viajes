import { ProveedorAlojamiento } from './proveedor-alojamiento';
import { ProveedorTransporte } from './proveedor-transporte';

export class Paquete {
    _id:string;
    destino:string;
    imagen:string;
    descripcion:string;
    precio:number;
    fechaS:Date;
    fechaV:Date;
    alojamiento:ProveedorAlojamiento;
    transporte: ProveedorTransporte;
    estadia:number;
    cantPersonas:number;

    Paquete(_id?:string,destino?:string,imagen?:string,descripcion?:string,precio?:number,fechaS?:Date,fechaV?:Date,alojamiento?:ProveedorAlojamiento,transporte?:ProveedorTransporte,estadia?:number,cantPersonas?:number){
        this._id=_id;
        this.destino=destino;
        this.imagen=imagen;
        this.descripcion=descripcion;
        this.precio=precio;
        this.fechaS=fechaS;
        this.fechaV=fechaV;
        this.alojamiento=new ProveedorAlojamiento();
        this.transporte=new ProveedorTransporte();
        this.estadia=estadia;
        this.cantPersonas=cantPersonas;
    }
}

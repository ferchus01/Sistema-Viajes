import { Paquete } from './paquete';

export class Reserva {
    _id:string;
    nombre:string;
    apellido:string;
    email:string;
    dni:number;
    fecha:string;
    domicilio:string;
    codArea:number;
    numTicket:number;
    numTelefono:number;
    paquete:Paquete;

    Reserva(_id?:string,nombre?:string,apellido?:string,email?:string,dni?:number,fecha?:string,domicilio?:string,codArea?:number,numTicket?:number,numTelefono?:number,paquete?:Paquete){
        this._id=_id;
        this.nombre=nombre;
        this.apellido=apellido;
        this.email=email;
        this.dni=dni;
        this.fecha=fecha;
        this.domicilio=domicilio;
        this.codArea=codArea;
        this.numTicket=numTicket;
        this.numTelefono=numTelefono;
        this.paquete=paquete;
    }
}

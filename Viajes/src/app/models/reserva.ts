import { Paquete } from './paquete';
import { Promocion } from './promocion';
import { Usuario } from './usuario';
import { Pago } from './pago';
import { Formapago } from './formapago';

export class Reserva {
    _id:string;
    nombre:string;
    apellido:string;
    email:string;
    estado : boolean;
    dni:number;
    fecha:Date;
    domicilio:string;
    codArea:number;
    numTicket:number;
    numTelefono:number;
    paquete:Paquete;
    promocion : Promocion;
    usuario: Usuario;
    pago : Pago;
    formadePago : Formapago;
   constructor()
   {
        this.promocion= new Promocion();
        this.usuario = new Usuario();
        this.pago= new Pago();
        this.formadePago= new Formapago();
        this.paquete= new Paquete();
   }
}

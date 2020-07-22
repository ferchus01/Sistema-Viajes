import { Paquete } from './paquete';
import { Promocion } from './promocion';
import { Usuario } from './usuario';
import { Pago } from './pago';
import { Formapago } from './formapago';

export class Reserva {
    // tslint:disable-next-line: variable-name
    _id: string;
    nomcliente: string;
    apecliente: string;
    email: string;
    estado: boolean;
    dnicliente: number;
    fecha: Date;
    domicilio: string;
    codArea: number;
    numTicket: number;
    telcliente: number;
    paquete: Paquete;
    promocion: Promocion;
    usuario: Usuario;
    pago: Pago;
    formadePago: Formapago;
   constructor()
   {
     //    this.promocion = new Promocion();
     //    this.promocion.id = 'aa';
     //    this.usuario = new Usuario();
     //    this.usuario._id = 'aa';
     //    this.pago = new Pago();
     //    this.pago.id = 'aa';
     //    this.formadePago = new Formapago();
     //    this.formadePago.id = 'aa';
     //    this.paquete = new Paquete();
     //    this.paquete.id=' sefsdf';
   }
}

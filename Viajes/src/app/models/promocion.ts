import { Paquete } from './paquete';

export class Promocion {
    _id : string;
    descuento : number;
    diasDeRegalo : number;
    puntosDeRegalo : number;
    paqueteTuristico : Paquete;

    constructor()
    {
        this.paqueteTuristico = new Paquete();
    }
}

import { Paquete } from './paquete';

export class Promocion {
    // tslint:disable-next-line: variable-name
    _id: string;
    descuento: number;
    diasDeRegalo: number;
    puntosDeRegalo: number;
    paqueteTuristico: Paquete;
    constructor()
    {
        this.paqueteTuristico = new Paquete();
    }
}

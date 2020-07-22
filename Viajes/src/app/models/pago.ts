export class Pago {

    // tslint:disable-next-line: variable-name
    _id: string;
    fecha: Date;
    total: number;
    cuotas: number;
    interes: number;
    estado: boolean;
    constructor()
    {
        this.estado = true;
    }
}

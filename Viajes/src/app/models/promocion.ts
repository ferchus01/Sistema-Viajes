import { Paquete } from './paquete';

export class Promocion {
    private _id: string;
    public get id(): string {
        return this._id;
    }
    public set id(value: string) {
        this._id = value;
    }
    private descuento: number;
    public get _descuento(): number {
        return this.descuento;
    }
    public set _descuento(value: number) {
        this.descuento = value;
    }
    private diasDeRegalo: number;
    public get _diasDeRegalo(): number {
        return this.diasDeRegalo;
    }
    public set _diasDeRegalo(value: number) {
        this.diasDeRegalo = value;
    }
    private puntosDeRegalo: number;
    public get _puntosDeRegalo(): number {
        return this.puntosDeRegalo;
    }
    public set _puntosDeRegalo(value: number) {
        this.puntosDeRegalo = value;
    }
    private paqueteTuristico: Paquete;
    public get _paqueteTuristico(): Paquete {
        return this.paqueteTuristico;
    }
    public set _paqueteTuristico(value: Paquete) {
        this.paqueteTuristico = value;
    }

    constructor()
    {
        this.paqueteTuristico = new Paquete();
    }
}

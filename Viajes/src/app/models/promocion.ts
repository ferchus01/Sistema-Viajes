import { Paquete } from './paquete';

export class Promocion {
    private _id: string;
    public get id(): string {
        return this._id;
    }
    public set id(value: string) {
        this._id = value;
    }
    private _descuento: number;
    public get descuento(): number {
        return this._descuento;
    }
    public set descuento(value: number) {
        this._descuento = value;
    }
    private _diasDeRegalo: number;
    public get diasDeRegalo(): number {
        return this._diasDeRegalo;
    }
    public set diasDeRegalo(value: number) {
        this._diasDeRegalo = value;
    }
    private _puntosDeRegalo: number;
    public get puntosDeRegalo(): number {
        return this._puntosDeRegalo;
    }
    public set puntosDeRegalo(value: number) {
        this._puntosDeRegalo = value;
    }
    private _paqueteTuristico: Paquete;
    public get paqueteTuristico(): Paquete {
        return this._paqueteTuristico;
    }
    public set paqueteTuristico(value: Paquete) {
        this._paqueteTuristico = value;
    }

    constructor()
    {
        this.paqueteTuristico = new Paquete();
    }
}

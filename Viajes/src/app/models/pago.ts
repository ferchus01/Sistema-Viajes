export class Pago {
    private _id: string;
    public get id(): string {
        return this._id;
    }
    public set id(value: string) {
        this._id = value;
    }
    private _fecha: Date;
    public get fecha(): Date {
        return this._fecha;
    }
    public set fecha(value: Date) {
        this._fecha = value;
    }
    private _total: number;
    public get total(): number {
        return this._total;
    }
    public set total(value: number) {
        this._total = value;
    }
    private _cuotas: number;
    public get cuotas(): number {
        return this._cuotas;
    }
    public set cuotas(value: number) {
        this._cuotas = value;
    }
    private _interes: number;
    public get interes(): number {
        return this._interes;
    }
    public set interes(value: number) {
        this._interes = value;
    }
    private _estado: boolean;
    public get estado(): boolean {
        return this._estado;
    }
    public set estado(value: boolean) {
        this._estado = value;
    }
    constructor()
    {
        this.estado=true;
    }
}

export class Tarjeta {
    // tslint:disable-next-line: variable-name
    private _id: string;
    public get id(): string {
        return this._id;
    }
    public set id(value: string) {
        this._id = value;
    }
    private _numero: number;
    public get numero(): number {
        return this._numero;
    }
    public set numero(value: number) {
        this._numero = value;
    }
    private _titularTarjeta: string;
    public get titularTarjeta(): string {
        return this._titularTarjeta;
    }
    public set titularTarjeta(value: string) {
        this._titularTarjeta = value;
    }
    private _dniTitular: number;
    public get dniTitular(): number {
        return this._dniTitular;
    }
    public set dniTitular(value: number) {
        this._dniTitular = value;
    }
    private _vencimiento: Date;
    public get vencimiento(): Date {
        return this._vencimiento;
    }
    public set vencimiento(value: Date) {
        this._vencimiento = value;
    }
    constructor()
    {
    }
}

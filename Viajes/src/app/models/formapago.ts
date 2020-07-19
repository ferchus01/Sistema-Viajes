export class Formapago {
    private _id: string;
    public get id(): string {
        return this._id;
    }
    public set id(value: string) {
        this._id = value;
    }
    private _descripcion: string;
    public get descripcion(): string {
        return this._descripcion;
    }
    public set descripcion(value: string) {
        this._descripcion = value;
    }
    constructor()
    {
    }
}

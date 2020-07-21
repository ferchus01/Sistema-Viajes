export class TipoUsuario {
    // tslint:disable-next-line: variable-name
    private _id: string;
    public get id(): string {
        return this._id;
    }
    public set id(value: string) {
        this._id = value;
    }
    private descripcion: string;
    public get _descripcion(): string {
        return this.descripcion;
    }
    public set _descripcion(value: string) {
        this.descripcion = value;
    }
    constructor()
    {

    }
}

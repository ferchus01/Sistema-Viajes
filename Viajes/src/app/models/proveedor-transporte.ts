export class ProveedorTransporte {
    private _id: string;
    public get id(): string {
        return this._id;
    }
    public set id(value: string) {
        this._id = value;
    }
    private _nombre: string;
    public get nombre(): string {
        return this._nombre;
    }
    public set nombre(value: string) {
        this._nombre = value;
    }
    private _tipo: string;
    public get tipo(): string {
        return this._tipo;
    }
    public set tipo(value: string) {
        this._tipo = value;
    }
    private _imagen: string;
    public get imagen(): string {
        return this._imagen;
    }
    public set imagen(value: string) {
        this._imagen = value;
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

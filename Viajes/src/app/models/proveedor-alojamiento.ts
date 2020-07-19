export class ProveedorAlojamiento {
    // tslint:disable-next-line: variable-name
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
    private _ubicacion: string;
    public get ubicacion(): string {
        return this._ubicacion;
    }
    public set ubicacion(value: string) {
        this._ubicacion = value;
    }
    private _imagen: string;
    public get imagen(): string {
        return this._imagen;
    }
    public set imagen(value: string) {
        this._imagen = value;
    }
    private _tipo: string;
    public get tipo(): string {
        return this._tipo;
    }
    public set tipo(value: string) {
        this._tipo = value;
    }
    private _descripcion: string;
    public get descripcion(): string {
        return this._descripcion;
    }
    public set descripcion(value: string) {
        this._descripcion = value;
    }

    private _cantpersonas: number;
    public get cantpersonas(): number {
        return this._cantpersonas;
    }
    public set cantpersonas(value: number) {
        this._cantpersonas = value;
    }
    // tslint:disable-next-line: variable-name
    constructor(_id ?: string,nombre?: string, ubicacion?: string, imagen ?: string, tipo ?: string, descripcion?: string, cantpersonas?:number)
    {
        this._id = _id;
        this.nombre = nombre;
        this.ubicacion = ubicacion;
        this.imagen = imagen;
        this.tipo = tipo;
        this.descripcion = descripcion;
        this.cantpersonas = cantpersonas;
    }
}

export class ProveedorAlojamiento {
    // tslint:disable-next-line: variable-name
    private _id: string;
    public get id(): string {
        return this._id;
    }
    public set id(value: string) {
        this._id = value;
    }
    private nombre: string;
    public get _nombre(): string {
        return this.nombre;
    }
    public set _nombre(value: string) {
        this.nombre = value;
    }
    private ubicacion: string;
    public get _ubicacion(): string {
        return this.ubicacion;
    }
    public set _ubicacion(value: string) {
        this.ubicacion = value;
    }
    private imagen: string;
    public get _imagen(): string {
        return this.imagen;
    }
    public set _imagen(value: string) {
        this.imagen = value;
    }
    private tipo: string;
    public get _tipo(): string {
        return this.tipo;
    }
    public set _tipo(value: string) {
        this.tipo = value;
    }
    private descripcion: string;
    public get _descripcion(): string {
        return this.descripcion;
    }
    public set _descripcion(value: string) {
        this.descripcion = value;
    }

    private cantpersonas: number;
    public get _cantpersonas(): number {
        return this.cantpersonas;
    }
    public set _cantpersonas(value: number) {
        this.cantpersonas = value;
    }
    // tslint:disable-next-line: variable-name
    // tslint:disable-next-line: max-line-length
    constructor(_id ?: string, nombre?: string, ubicacion?: string, imagen ?: string, tipo ?: string, descripcion?: string, cantpersonas?: number)
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

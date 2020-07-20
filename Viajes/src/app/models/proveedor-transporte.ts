export class ProveedorTransporte {
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
    private tipo: string;
    public get _tipo(): string {
        return this.tipo;
    }
    public set _tipo(value: string) {
        this.tipo = value;
    }
    private imagen: string;
    public get _imagen(): string {
        return this.imagen;
    }
    public set _imagen(value: string) {
        this.imagen = value;
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

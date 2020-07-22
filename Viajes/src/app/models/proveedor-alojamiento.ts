export class ProveedorAlojamiento {
    // tslint:disable-next-line: variable-name
    _id: string;
    nombre: string;
    ubicacion: string;
    imagen: string;
    tipo: string;
    descripcion: string;
    cantpersonas: number;
    // tslint:disable-next-line: variable-name
    // tslint:disable-next-line: max-line-length
    constructor(_id?: string, nombre?: string, ubicacion?: string, imagen ?: string, tipo ?: string, descripcion?: string, cantpersonas?: number)
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

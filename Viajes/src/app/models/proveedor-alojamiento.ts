export class ProveedorAlojamiento {
    // tslint:disable-next-line: variable-name
    _id: string;
    nombre: string;
    ubicacion: string;
    imagen: string;
    tipo: string;
    descripcion: string;
    // tslint:disable-next-line: variable-name
    constructor(_id ?: string,nombre?: string, ubicacion?: string, imagen ?: string, tipo ?: string, descripcion?: string)
    {
        this._id = _id;
        this.nombre = nombre;
        this.ubicacion = ubicacion;
        this.imagen = imagen;
        this.tipo = tipo;
        this.descripcion = descripcion;
    }
}

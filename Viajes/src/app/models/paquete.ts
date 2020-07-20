import { ProveedorAlojamiento } from './proveedor-alojamiento';
import { ProveedorTransporte } from './proveedor-transporte';

export class Paquete {
    private _id: string;
    public get id(): string {
        return this._id;
    }
    public set id(value: string) {
        this._id = value;
    }
    private destino: string;
    public get _destino(): string {
        return this.destino;
    }
    public set _destino(value: string) {
        this.destino = value;
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
    private precio: number;
    public get _precio(): number {
        return this.precio;
    }
    public set _precio(value: number) {
        this.precio = value;
    }
    private fechaS: Date;
    public get _fechaS(): Date {
        return this.fechaS;
    }
    public set _fechaS(value: Date) {
        this.fechaS = value;
    }
    private fechaV: Date;
    public get _fechaV(): Date {
        return this.fechaV;
    }
    public set _fechaV(value: Date) {
        this.fechaV = value;
    }
    private alojamiento: ProveedorAlojamiento;
    public get _alojamiento(): ProveedorAlojamiento {
        return this.alojamiento;
    }
    public set _alojamiento(value: ProveedorAlojamiento) {
        this.alojamiento = value;
    }
    private transporte: ProveedorTransporte;
    public get _transporte(): ProveedorTransporte {
        return this.transporte;
    }
    public set _transporte(value: ProveedorTransporte) {
        this.transporte = value;
    }
    private estadia: number;
    public get _estadia(): number {
        return this.estadia;
    }
    public set _estadia(value: number) {
        this.estadia = value;
    }
    private cantPersonas: number;
    public get _cantPersonas(): number {
        return this.cantPersonas;
    }
    public set _cantPersonas(value: number) {
        this.cantPersonas = value;
    }

    // tslint:disable-next-line: max-line-length
    Paquete(_id?: string, destino?: string, imagen?: string, descripcion?: string, precio?: number, fechaS?: Date, fechaV?: Date, alojamiento?: ProveedorAlojamiento, transporte?: ProveedorTransporte, estadia?: number, cantPersonas?: number){
        this._id = _id;
        this.destino = destino;
        this.imagen = imagen;
        this.descripcion = descripcion;
        this.precio = precio;
        this.fechaS =  fechaS;
        this.fechaV = fechaV;
        this.alojamiento = new ProveedorAlojamiento();
        this.transporte = new ProveedorTransporte();
        this.estadia = estadia;
        this.cantPersonas = cantPersonas;
    }
}

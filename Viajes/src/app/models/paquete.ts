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
    private _destino: string;
    public get destino(): string {
        return this._destino;
    }
    public set destino(value: string) {
        this._destino = value;
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
    private _precio: number;
    public get precio(): number {
        return this._precio;
    }
    public set precio(value: number) {
        this._precio = value;
    }
    private _fechaS: Date;
    public get fechaS(): Date {
        return this._fechaS;
    }
    public set fechaS(value: Date) {
        this._fechaS = value;
    }
    private _fechaV: Date;
    public get fechaV(): Date {
        return this._fechaV;
    }
    public set fechaV(value: Date) {
        this._fechaV = value;
    }
    private _alojamiento: ProveedorAlojamiento;
    public get alojamiento(): ProveedorAlojamiento {
        return this._alojamiento;
    }
    public set alojamiento(value: ProveedorAlojamiento) {
        this._alojamiento = value;
    }
    private _transporte: ProveedorTransporte;
    public get transporte(): ProveedorTransporte {
        return this._transporte;
    }
    public set transporte(value: ProveedorTransporte) {
        this._transporte = value;
    }
    private _estadia: number;
    public get estadia(): number {
        return this._estadia;
    }
    public set estadia(value: number) {
        this._estadia = value;
    }
    private _cantPersonas: number;
    public get cantPersonas(): number {
        return this._cantPersonas;
    }
    public set cantPersonas(value: number) {
        this._cantPersonas = value;
    }

    Paquete(_id?:string,destino?:string,imagen?:string,descripcion?:string,precio?:number,fechaS?:Date,fechaV?:Date,alojamiento?:ProveedorAlojamiento,transporte?:ProveedorTransporte,estadia?:number,cantPersonas?:number){
        this._id=_id;
        this.destino=destino;
        this.imagen=imagen;
        this.descripcion=descripcion;
        this.precio=precio;
        this.fechaS=fechaS;
        this.fechaV=fechaV;
        this.alojamiento=new ProveedorAlojamiento();
        this.transporte=new ProveedorTransporte();
        this.estadia=estadia;
        this.cantPersonas=cantPersonas;
    }
}

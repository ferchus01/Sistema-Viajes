export class Paquete {
    _id:string;
    destino:string;
    imagen:string;
    descripcion:string;
    precio:number;
    fechaS:string;
    fechaV:string;
    alojamiento:string;
    transporte:string;
    estadia:number;
    cantPersonas:number;

    Paquete(_id?:string,destino?:string,imagen?:string,descripcion?:string,precio?:number,fechaS?:string,fechaV?:string,alojamiento?:string,transporte?:string,estadia?:number,cantPersonas?:number){
        this._id=_id;
        this.destino=destino;
        this.imagen=imagen;
        this.descripcion=descripcion;
        this.precio=precio;
        this.fechaS=fechaS;
        this.fechaV=fechaV;
        this.alojamiento=alojamiento;
        this.transporte=transporte;
        this.estadia=estadia;
        this.cantPersonas=cantPersonas;
    }
}

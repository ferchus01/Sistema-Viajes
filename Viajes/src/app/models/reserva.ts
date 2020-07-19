import { Paquete } from './paquete';
import { Promocion } from './promocion';
import { Usuario } from './usuario';
import { Pago } from './pago';
import { Formapago } from './formapago';

export class Reserva {
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
    private _apellido: string;
     public get apellido(): string {
          return this._apellido;
     }
     public set apellido(value: string) {
          this._apellido = value;
     }
    private _email: string;
     public get email(): string {
          return this._email;
     }
     public set email(value: string) {
          this._email = value;
     }
    private _estado: boolean;
     public get estado(): boolean {
          return this._estado;
     }
     public set estado(value: boolean) {
          this._estado = value;
     }
    private _dni: number;
     public get dni(): number {
          return this._dni;
     }
     public set dni(value: number) {
          this._dni = value;
     }
    private _fecha: Date;
     public get fecha(): Date {
          return this._fecha;
     }
     public set fecha(value: Date) {
          this._fecha = value;
     }
    private _domicilio: string;
     public get domicilio(): string {
          return this._domicilio;
     }
     public set domicilio(value: string) {
          this._domicilio = value;
     }
    private _codArea: number;
     public get codArea(): number {
          return this._codArea;
     }
     public set codArea(value: number) {
          this._codArea = value;
     }
    private _numTicket: number;
     public get numTicket(): number {
          return this._numTicket;
     }
     public set numTicket(value: number) {
          this._numTicket = value;
     }
    private _numTelefono: number;
     public get numTelefono(): number {
          return this._numTelefono;
     }
     public set numTelefono(value: number) {
          this._numTelefono = value;
     }
    private _paquete: Paquete;
     public get paquete(): Paquete {
          return this._paquete;
     }
     public set paquete(value: Paquete) {
          this._paquete = value;
     }
    private _promocion: Promocion;
     public get promocion(): Promocion {
          return this._promocion;
     }
     public set promocion(value: Promocion) {
          this._promocion = value;
     }
    private _usuario: Usuario;
     public get usuario(): Usuario {
          return this._usuario;
     }
     public set usuario(value: Usuario) {
          this._usuario = value;
     }
    private _pago: Pago;
     public get pago(): Pago {
          return this._pago;
     }
     public set pago(value: Pago) {
          this._pago = value;
     }
    private _formadePago: Formapago;
     public get formadePago(): Formapago {
          return this._formadePago;
     }
     public set formadePago(value: Formapago) {
          this._formadePago = value;
     }
   constructor()
   {
        this.promocion= new Promocion();
        this.usuario = new Usuario();
        this.pago= new Pago();
        this.formadePago= new Formapago();
        this.paquete= new Paquete();
   }
}

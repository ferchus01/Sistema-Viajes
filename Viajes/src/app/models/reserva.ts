import { Paquete } from './paquete';
import { Promocion } from './promocion';
import { Usuario } from './usuario';
import { Pago } from './pago';
import { Formapago } from './formapago';

export class Reserva {
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
    private apellido: string;
     public get _apellido(): string {
          return this.apellido;
     }
     public set _apellido(value: string) {
          this.apellido = value;
     }
    private email: string;
     public get _email(): string {
          return this.email;
     }
     public set _email(value: string) {
          this.email = value;
     }
    private estado: boolean;
     public get _estado(): boolean {
          return this.estado;
     }
     public set _estado(value: boolean) {
          this.estado = value;
     }
    private dni: number;
     public get _dni(): number {
          return this.dni;
     }
     public set _dni(value: number) {
          this.dni = value;
     }
    private fecha: Date;
     public get _fecha(): Date {
          return this.fecha;
     }
     public set _fecha(value: Date) {
          this.fecha = value;
     }
    private domicilio: string;
     public get _domicilio(): string {
          return this.domicilio;
     }
     public set _domicilio(value: string) {
          this.domicilio = value;
     }
    private codArea: number;
     public get _codArea(): number {
          return this.codArea;
     }
     public set _codArea(value: number) {
          this.codArea = value;
     }
    private numTicket: number;
     public get _numTicket(): number {
          return this.numTicket;
     }
     public set _numTicket(value: number) {
          this.numTicket = value;
     }
    private numTelefono: number;
     public get _numTelefono(): number {
          return this.numTelefono;
     }
     public set _numTelefono(value: number) {
          this.numTelefono = value;
     }
    private paquete: Paquete;
     public get _paquete(): Paquete {
          return this.paquete;
     }
     public set _paquete(value: Paquete) {
          this.paquete = value;
     }
    private promocion: Promocion;
     public get _promocion(): Promocion {
          return this.promocion;
     }
     public set _promocion(value: Promocion) {
          this.promocion = value;
     }
    private usuario: Usuario;
     public get _usuario(): Usuario {
          return this._usuario;
     }
     public set _usuario(value: Usuario) {
          this.usuario = value;
     }
    private pago: Pago;
     public get _pago(): Pago {
          return this.pago;
     }
     public set _pago(value: Pago) {
          this.pago = value;
     }
    private formadePago: Formapago;
     public get _formadePago(): Formapago {
          return this.formadePago;
     }
     public set _formadePago(value: Formapago) {
          this.formadePago = value;
     }
   constructor()
   {
        this.promocion = new Promocion();
        this.usuario = new Usuario();
        this.pago = new Pago();
        this.formadePago = new Formapago();
        this.paquete = new Paquete();
   }
}

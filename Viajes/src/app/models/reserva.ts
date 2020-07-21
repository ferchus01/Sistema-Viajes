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
    private nomcliente: string;
     public get _nomcliente(): string {
          return this.nomcliente;
     }
     public set _nomcliente(value: string) {
          this.nomcliente = value;
     }
    private apecliente: string;
     public get _apecliente(): string {
          return this.apecliente;
     }
     public set _apecliente(value: string) {
          this.apecliente = value;
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
    private dnicliente: number;
     public get _dnicliente(): number {
          return this.dnicliente;
     }
     public set _dnicliente(value: number) {
          this.dnicliente = value;
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
    private telcliente: number;
     public get _telcliente(): number {
          return this.telcliente;
     }
     public set _telcliente(value: number) {
          this.telcliente = value;
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
          return this.usuario;
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
     //    this.promocion = new Promocion();
     //    this.promocion.id = 'aa';
     //    this.usuario = new Usuario();
     //    this.usuario._id = 'aa';
     //    this.pago = new Pago();
     //    this.pago.id = 'aa';
     //    this.formadePago = new Formapago();
     //    this.formadePago.id = 'aa';
     //    this.paquete = new Paquete();
     //    this.paquete.id=' sefsdf';
   }
}

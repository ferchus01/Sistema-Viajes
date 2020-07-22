import { Component, OnInit } from '@angular/core';
import { Paquete } from 'src/app/models/paquete';
import { PaqueteService } from 'src/app/services/paquete.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import {ProveedorAlojamiento} from 'src/app/models/proveedor-alojamiento';
import {ProveedorTransporte} from 'src/app/models/proveedor-transporte';
import { ProveedorAlojamientoService } from 'src/app/services/proveedor-alojamiento.service';
import { ProveedorTransporteService } from 'src/app/services/proveedor-transporte.service';
import { Formapago } from 'src/app/models/formapago';
import { FormapagoService } from 'src/app/services/formapago.service';
import { Form } from '@angular/forms';
import { Promocion } from 'src/app/models/promocion';
import { PromocionService } from 'src/app/services/promocion.service';
import { TarjetaService } from 'src/app/services/tarjeta.service';
import { TipousuarioService } from 'src/app/services/tipousuario.service';
import { PagoService } from 'src/app/services/pago.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Tarjeta } from 'src/app/models/tarjeta';
import { TipoUsuario } from 'src/app/models/tipo-usuario';
import { TagPlaceholder } from '@angular/compiler/src/i18n/i18n_ast';
import { Pago } from 'src/app/models/pago';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-paquetes-abm',
  templateUrl: './paquetes-abm.component.html',
  styleUrls: ['./paquetes-abm.component.css']
})
export class PaquetesAbmComponent implements OnInit {

  submitted = false;
  paq: Paquete;
  paqmod: Paquete;
  listaPaquetes: Array<Paquete>;
  listaAlojamiento: Array<ProveedorAlojamiento>;
  listaTransporte: Array<ProveedorTransporte>;

  // crud alojamiento
  alojamientonuevo: ProveedorAlojamiento;
  alojamientomd: ProveedorAlojamiento;

  // crud transporte
  transportenuevo: ProveedorTransporte;
  transportemd: ProveedorTransporte;

  // crud formapago incrustado
  formapagonuevo: Formapago;
  formapagomd: Formapago;
  listaFormaPago: Array<Formapago>;
  // crud promocion
  promocionnuevo: Promocion;
  promocionmd: Promocion;
  listapromocion: Array<Promocion>;
  // crud tarjeta incrustado
  tarjetanueva: Tarjeta;
  tarjetamd: Tarjeta;
  listatarjeta: Array<Tarjeta>;
  // crud tipo usuario
  tipousuarionuevo: TipoUsuario;
  tipousuariomd: TipoUsuario;
  listatipousuario: Array<TipoUsuario>;

  // crud pago incrustado
  pagonuevo: Pago;
  pagomd: Pago;
  listapago: Array<Pago>;

  // crud usuario
  usuarionuevo: Usuario;
  usuariomd: Usuario;
  listausuario: Array<Usuario>;

  constructor(
    private ps: PaqueteService,
    public modal: NgbModal,
    private toastr: ToastrService,
    private alojamientoService: ProveedorAlojamientoService,
    private transporteService: ProveedorTransporteService,
    private formapagoService: FormapagoService,
    private promocionServicie: PromocionService,
    private tipousuarioService: TipousuarioService,
    private usuarioService: UsuarioService
    ) {

      // operaciones paquete
    this.paq = new Paquete();
    this.paqmod = new Paquete();
    this.actualizarTabla();
    // operaciones alojamiento
    this.obtenerListaDeAlojamiento();
    this.alojamientonuevo = new ProveedorAlojamiento();
    this.alojamientomd = new ProveedorAlojamiento();
    // operacion de transporte
    this.obtenerListaDeTransporte();
    this.transportenuevo = new ProveedorTransporte();
    this.transportemd = new ProveedorTransporte();
     // operacion de formapago
    this.obtenerFormaPago();
    this.formapagonuevo = new Formapago();
    this.formapagomd = new Formapago();
     // operacion de promocion
    this.obtenerPromociones();
    this.promocionnuevo = new Promocion();
    this.promocionmd = new Promocion();
    // operacion de tipousuario
    this.obtenerTipoUsuarios();
    this.tipousuarionuevo = new TipoUsuario();
    this.tipousuariomd = new TipoUsuario();
     // operacion de usuario
    this.obtenerUsuarios();
    this.usuarionuevo = new Usuario();
    this.usuariomd = new Usuario();
  }

  ngOnInit(): void {
  }

  onSubmit(form) {
    this.submitted = true;
    console.log(form);
   }

  // ABM paquete

  public actualizarTabla(){
    this.listaPaquetes = new Array<Paquete>();
    let a = new Paquete();
    this.ps.actualizarT().subscribe(
      (result) => {
      for (const i of result)
      {
        Object.assign(a, i);
        const b = new ProveedorAlojamiento();
        Object.assign( b, i.alojamiento);
        a._alojamiento = b;
        const c = new ProveedorTransporte();
        Object.assign( c , i.transporte);
        a._transporte = c;
        this.listaPaquetes.push(a);
        a = new Paquete();
      }
      }
    );
    // this.toastr.success('paquetes Cargados','Confirmado')
    console.log(this.listaPaquetes);
  }
  public elegirPaquete(paquete: Paquete){
    Object.assign( this.paqmod , paquete);
    console.log(paquete);
    this.paqmod._transporte = this.listaTransporte.find((item: ProveedorTransporte)=> item.id === paquete._transporte.id);
    this.paqmod._alojamiento = this.listaAlojamiento.find((item: ProveedorAlojamiento)=> item.id === paquete._alojamiento.id);
  }

  cargarimagenpaquete(files, a: string)
  {

    if (files != null)
    {
      if (a === 'paquetenuevo')
      {
        this.paq._imagen = files[0].base64;
      }
       else{
        this.paqmod._imagen = files[0].base64;
      }
    }
  }
  public agregarPaquete(){
    console.log(this.paq);
    this.ps.agregarAsis(this.paq).subscribe(
      (result) => {
        this.toastr.success('Paquete Creado Correctamente', 'Confirmado');
        this.paq = new Paquete();
        this.actualizarTabla();
      },
      (error) => {
        this.toastr.error('no se pudo crear un paquete', 'Error');
        console.log(error);
      }
    );
  }

  public eliminarPaquete(paquete: Paquete){
    this.ps.EliminarA(paquete).subscribe(
      (result) => {
        this.toastr.success('Paquete Eliminado Correctamente', 'Confirmado');
        this.actualizarTabla();
      },
      (error) => {
        this.toastr.error('no se pudo eliminar el paquete', 'Error');

      }
    );
  }

  public modificarPaquete(){
    this.ps.modificar(this.paqmod).subscribe(
      (result) => {
        this.toastr.info('Paquete Modificado Correctamente', 'Confirmado');
        this.paqmod = new Paquete();
        this.actualizarTabla();
      },
      (error) => {
        this.toastr.error('no se pudo modificar el paquete', 'Error');
      }
    );
  }

  // TRANSPORTE
  public obtenerListaDeTransporte()
  {
    this.listaTransporte = new Array<ProveedorTransporte>();
    this.transporteService.listaTransporte().subscribe(
      (result) => {
        let a = new ProveedorTransporte();
        for ( let r of result)
        {
          Object.assign(a, r);
          this.listaTransporte.push(a);
          a = new ProveedorTransporte();
        }
      },
      (error) =>
      {
        this.toastr.error('no se pudo crear', 'Error');
      }
    );
  }
  public agregarTransporte()
  {
    this.transporteService.agregarTransporte(this.transportenuevo).subscribe(
      (resultado) =>
      {
        this.toastr.success('transporte agregado', 'operacion exitosa');
        this.transportenuevo = new ProveedorTransporte();
        this.obtenerListaDeTransporte();
        this.actualizarTabla();
      }
    );
  }

  cargarimagenTransporte(files, a: string)
  {

    if (files != null)
    {
      if (a === 'transportenuevo')
      {
        this.transportenuevo._imagen = files[0].base64;
      }
       else{
        this.transportemd._imagen = files[0].base64;
      }
    }
  }
  public modificarTransporte()
  {
    this.transporteService.ModificarTransporte(this.transportemd).subscribe(
      (resultado) =>
      {
        this.toastr.success('alojamiento modificado', 'operacion exitosa');
        this.obtenerListaDeTransporte();
        this.actualizarTabla();
        this.transportemd = new ProveedorTransporte();
      }
    );
  }
  public eliminarTransporte(transport: ProveedorTransporte)
  {
    this.transporteService.EliminarTransporte(transport.id).subscribe(
      (resultado) =>
      {
        this.toastr.success('alojamiento eliminado', 'operacion exitosa');
        this.obtenerListaDeTransporte();
        this.actualizarTabla();
      }
    );
  }
  public seleccionarTransporte(transporte: ProveedorAlojamiento)
  {
    Object.assign(this.transportemd, transporte);
  }
  // ALOJAMIENTO
  public obtenerListaDeAlojamiento()
  {
    this.listaAlojamiento = new Array<ProveedorAlojamiento>();
    this.alojamientoService.listaPaProveedoresAlojamiento().subscribe(
      (result) => {
        let a = new ProveedorAlojamiento();
        for ( let r of result)
        {
          Object.assign(a, r);
          this.listaAlojamiento.push(a);
          a = new ProveedorAlojamiento();
        }
      },
      (error) =>
      {
        this.toastr.error('no se pudo crear', 'Error');
      }
    );
  }
  public agregarAlojamiento()
  {
    this.alojamientoService.agregarAlojamiento(this.alojamientonuevo).subscribe(
      (resultado) =>
      {
        this.toastr.success('alojamiento agregado', 'operacion exitosa');
        this.alojamientonuevo = new ProveedorAlojamiento();
        this.obtenerListaDeAlojamiento();
        this.actualizarTabla();
      }
    );
  }
  cargarimagenAlojamiento(files, a: string)
  {

    if (files != null)
    {
      if (a === 'alojamientonuevo')
      {
        this.alojamientonuevo._imagen = files[0].base64;
      }
      else{
        this.alojamientomd._imagen = files[0].base64;
      }
    }
  }
  public seleccionarAlojamiento(alojamiento: ProveedorAlojamiento)
  {
    Object.assign(this.alojamientomd, alojamiento);
  }
  public modificarAlojamiento()
  {
    this.alojamientoService.ModificarAlojamiento(this.alojamientomd).subscribe(
      (resultado) =>
      {
        this.toastr.success('alojamiento modificado', 'operacion exitosa');
        this.obtenerListaDeAlojamiento();
        this.actualizarTabla();
        this.alojamientomd = new ProveedorAlojamiento();
      }
    );
  }
  public eliminarAlojamiento(alojamiento: ProveedorAlojamiento)
  {
    this.alojamientoService.EliminarAlojamiento(alojamiento.id).subscribe(
      (resultado) =>
      {
        this.toastr.success('alojamiento eliminado', 'operacion exitosa');
        this.obtenerListaDeAlojamiento();
        this.actualizarTabla();
      }
    );
  }

  // ABM formapago
  public obtenerFormaPago()
  {
    this.listaFormaPago = new Array<Formapago>();
    this.formapagoService.listadepago().subscribe(
      (result) => {
        const a = new Formapago();
        for (const r of result)
        {
          Object.assign(a, r);
          this.listaFormaPago.push(a);
        }
      }
    );
  }
  public agregarFormaPago()
  {
    this.formapagoService.agregarFormaPago(this.formapagonuevo).subscribe(
      (resultado) =>
      {
        this.toastr.success('forma de pago agregado', ' operacion exitosa');
      }
    );
  }
  public modificarFormaPago()
  {
    this.formapagoService.ModificarFormaPago(this.formapagomd).subscribe(
      (result) =>
      {
        this.toastr.info('forma de pago modificada', ' operacion exitosa');
      }
    );
  }
  public eliminarFormaPago(formaPago: Formapago){
    this.formapagoService.EliminarFormaPago(formaPago.id).subscribe(
      (resultado) =>
      {
        this.toastr.info('forma de pago eliminada', ' operacion exitosa');
      }
    );
  }
  public selecionarFormaPago(pago: Formapago)
  {
    Object.assign(this.formapagomd, pago);
  }

  // abm promociones
  public obtenerPromociones(){
    this.listapromocion = new Array<Promocion>();
    this.promocionServicie.listadePromocion().subscribe(
      (result) => {
        const a = new Promocion();
        const b = new Paquete();
        for (const r of result){
          Object.assign(a, r);
          Object.assign(b, r.paquete);
          a._paqueteTuristico = b;
          this.listapromocion.push(a);
        }
      }
    );
  }

  public agregarPromociones(){
    this.promocionServicie.agregarPromocion(this.promocionnuevo).subscribe(
      (resultado) =>
      {
        this.toastr.success('Promocion agregado', ' operacion exitosa');
        this.obtenerPromociones();
        this.promocionnuevo = new Promocion();
      }
    );
  }

  public modificarPromociones(){
    this.promocionServicie.ModificarPromocion(this.promocionmd).subscribe(
      (result) =>
      {
        this.toastr.info('Promocion modificada', ' operacion exitosa');
        this.obtenerPromociones();
      }
    );
  }
  public eliminarPromociones(promo: Promocion){
    this.promocionServicie.EliminarPromocion(promo.id).subscribe(
      (resultado) =>
      {
        this.toastr.info('Promocion eliminada', ' operacion exitosa');
      }
    );
    this.obtenerPromociones();
  }
  public selecionarPromociones(promocion: Promocion)
  {
    Object.assign(this.promocionmd, promocion);
  }

  // ABM usuario
  public obtenerUsuarios()
  {
    this.listausuario = new Array<Usuario>();
    this.usuarioService.listaUsuario().subscribe(
      (result) => {
        const q = new Usuario();
        const e = new TipoUsuario();
        for (const a of result)
        {
          Object.assign(q, a);
          Object.assign(e, a.tipousuario);
          q.tipoUsuario = e;
          this.listausuario.push(q);
        }
      },
      (error) =>
      {
        this.toastr.error('no se pudo crear', 'Error');
      }
    );
  }
  public agregarUsuario()
  { console.log(this.usuarionuevo);
    this.usuarioService.agregarUsuario(this.usuarionuevo).subscribe(
      (resultado) =>
      {
        this.toastr.success('usuario agregado', 'operacion exitosa');
        this.usuarionuevo = new Usuario();
        this.obtenerUsuarios();
        this.actualizarTabla();
      }
    );
  }
  public modificarUsuario()
  {
    this.usuarioService.ModificarUsuario(this.usuariomd).subscribe(
      (resultado) =>
      {
        this.toastr.success('usuario modificado', 'operacion exitosa');
        this.obtenerUsuarios();
        this.actualizarTabla();
        this.usuariomd = new Usuario();
      }
    );
  }
  public eliminarUsuario(usu: Usuario)
  {
    this.usuarioService.EliminarUsuario(usu._id).subscribe(
      (resultado) =>
      {
        this.toastr.success('usuario eliminado', 'operacion exitosa');
        this.obtenerUsuarios();
        this.actualizarTabla();
      }
    );
  }
  public seleccionarUsuario(usuario: Usuario)
  {
    Object.assign(this.usuariomd, usuario);
  }

  // abm tipoUsuario
  public obtenerTipoUsuarios()
  {
    this.listatipousuario = new Array<TipoUsuario>();
    this.tipousuarioService.listadeTipoUsuario().subscribe(
      (result) => {
        let e = new TipoUsuario();
        for (const a of result)
        {
          Object.assign(e, a);
          this.listatipousuario.push(e);
          e = new TipoUsuario();
        }
      },
      (error) =>
      {
        this.toastr.error('no se pudo crear', 'Error');
      }
    );
  }
  public agregarTipoUsuario()
  {
    this.tipousuarioService.agregarTipoUsuario(this.tipousuarionuevo).subscribe(
      (resultado) =>
      {
        this.toastr.success('usuario agregado', 'operacion exitosa');
        this.tipousuarionuevo = new TipoUsuario();
        this.obtenerTipoUsuarios();
        this.obtenerUsuarios();
        this.actualizarTabla();
      }
    );
  }
  public modificarTipoUsuario()
  {
    this.tipousuarioService.ModificarTipoUsuario(this.tipousuarionuevo).subscribe(
      (resultado) =>
      {
        this.toastr.success('usuario modificado', 'operacion exitosa');
        this.obtenerTipoUsuarios();
        this.obtenerUsuarios();
        this.actualizarTabla();
        this.tipousuariomd = new TipoUsuario();
      }
    );
  }
  public eliminarTipoUsuario(tipousuario: TipoUsuario)
  {
    this.tipousuarioService.EliminarTipoUsuario(tipousuario.id).subscribe(
      (resultado) =>
      {
        this.toastr.success('usuario eliminado', 'operacion exitosa');
        this.obtenerTipoUsuarios();
        this.obtenerUsuarios();
        this.actualizarTabla();
      }
    );
  }
  public seleccionarTipoUsuario(tipousuario: TipoUsuario)
  {
    Object.assign(this.tipousuariomd, tipousuario);
  }

  public limpiarModal(a: string){
    switch (a){
      case 'nuevo-paquete': this.paq = new Paquete(); break;
      case 'mod-paquete': this.paqmod = new Paquete(); break;
      case 'nuevo-alojamiento': this.alojamientonuevo = new ProveedorAlojamiento(); break;
      case 'mod-alojamiento': this.alojamientomd = new ProveedorAlojamiento(); break;
      case 'nuevo-transporte': this.transportenuevo = new ProveedorTransporte(); break;
      case 'mod-transporte': this. transportemd = new ProveedorTransporte(); break;
      case 'nuevo-promocion': this.promocionnuevo = new Promocion(); break;
      case 'mod-promocion': this.promocionmd = new Promocion(); break;
      // case 'nuevo-pago': break;
      // case 'mod-pago': break;
      case 'nuevo-usuario': this.usuarionuevo = new Usuario(); break;
      case 'mod-usuario': this.usuariomd = new Usuario(); break;
      case 'nuevo-formapago': this.formapagonuevo = new Formapago(); break;
      case 'mod-formapago':  this.formapagomd = new Formapago(); break;
      case 'nuevo-tipousuario': this.tipousuarionuevo = new TipoUsuario(); break;
      case 'mod-tipousuario':  this.tipousuariomd = new TipoUsuario(); break;
      // case 'nuevo-': break;
      // case 'mod-': break;
      // case 'nuevo-': break;
      // case 'mod-': break;
    }
    this.modal.dismissAll();
  }
}


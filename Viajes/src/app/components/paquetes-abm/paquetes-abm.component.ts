import { Component, OnInit } from '@angular/core';
import { Paquete } from 'src/app/models/paquete';
import { PaqueteService } from 'src/app/services/paquete.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import {ProveedorAlojamiento} from 'src/app/models/proveedor-alojamiento';
import {ProveedorTransporte} from 'src/app/models/proveedor-transporte';
import { ProveedorAlojamientoService } from 'src/app/services/proveedor-alojamiento.service';
import { ProveedorTransporteService } from 'src/app/services/proveedor-transporte.service';
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
  constructor(
    private ps: PaqueteService,
    public modal: NgbModal,
    private toastr: ToastrService,
    private alojamientoService: ProveedorAlojamientoService,
    private transporteService: ProveedorTransporteService
    ) {
    this.paq = new Paquete();
    this.paqmod = new Paquete();
    this.actualizarTabla();
    this.obtenerListaDeAlojamiento();
    this.obtenerListaDeTransporte();
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
    Object.assign( this.paq , paquete);
    this.paq._alojamiento = new ProveedorAlojamiento();
    this.paq._transporte = new ProveedorTransporte();
  }
   cargarimagenpaquete(files)
  {

    if (files != null)
    {
       this.paq._imagen = files[0].base64;
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
    this.ps.modificar(this.paq).subscribe(
      (result) => {
        this.toastr.info('Paquete Modificado Correctamente', 'Confirmado');
        this.paq = new Paquete();
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
        Object.assign(this.listaTransporte, result);
        console.log(this.listaTransporte);
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
        Object.assign(this.listaAlojamiento, result);
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
  public seleccionarAlojamiento(alojamiento: ProveedorAlojamiento)
  {
    Object.assign(this.alojamientomd, alojamiento);
  }
  public modificarAlojamient()
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

  public limpiarModal(a: string){
    switch (a){
      case 'nuevo-paquete': this.paq = new Paquete(); break;
      case 'mod-paquete': this.paqmod = new Paquete(); break;
    }
    this.modal.dismissAll();
  }
}

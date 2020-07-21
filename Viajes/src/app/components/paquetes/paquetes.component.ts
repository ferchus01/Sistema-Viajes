import { Component, OnInit } from '@angular/core';
import { Paquete } from 'src/app/models/paquete';
import { PaqueteService } from 'src/app/services/paquete.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { ReservaService } from 'src/app/services/reserva.service';
import { Reserva } from 'src/app/models/reserva';
import { ProveedorAlojamiento } from 'src/app/models/proveedor-alojamiento';
import { ProveedorTransporte } from 'src/app/models/proveedor-transporte';
import { Formapago } from 'src/app/models/formapago';
import { FormapagoService } from 'src/app/services/formapago.service';

@Component({
  selector: 'app-paquetes',
  templateUrl: './paquetes.component.html',
  styleUrls: ['./paquetes.component.css']
})
export class PaquetesComponent implements OnInit {
  paq: Paquete;
  resv: Reserva;
  listaPaquetes: Array<Paquete>;
  listadeFormaPago: Array<Formapago>;
  constructor(private ps: PaqueteService,
              public modal: NgbModal,
              private toastr: ToastrService,
              private rs: ReservaService,
              private formaPagoService: FormapagoService) {
    this.resv = new Reserva();
    this.paq = new Paquete();
    this.listaPaquetes = new Array<Paquete>();
    this.actualizarTabla();
   }

  ngOnInit(): void {
  }

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
  public cargarFormaPago()
  {
    this.listadeFormaPago = new Array<Formapago>();
    this.formaPagoService.listadepago().subscribe(
      (resultado) => {
        for (const r of resultado)
        {
          const a = new Formapago();
          Object.assign(a, r);
          this.listadeFormaPago.push(a);
        }
      }
    );
  }
  public elegirPaquete(paquete: Paquete){
    Object.assign(this.paq , paquete);
  }
  public agregarReserva(){
    const f = new Date();
    this.resv._fecha = f;
    this.resv._paquete = this.paq;
    this.resv._estado = true;
    console.log(this.resv);
    this.rs.agregarResv(this.resv).subscribe(
      (result) => {
        this.toastr.success('Reservado Correctamente', 'Confirmado');
        this.paq = new Paquete();
        this.resv = new Reserva();
        this.actualizarTabla();
      },
      (error) => {
        this.toastr.error('no se pudo Reservar el Paquete', 'Error');
      }
      );
  }

  public agregarPaquete(){
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
        console.log(error);
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
        console.log(error);
      }
    );

  }

}

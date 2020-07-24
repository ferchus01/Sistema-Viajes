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
import { UsuarioService } from 'src/app/services/usuario.service';
import { isNgTemplate } from '@angular/compiler';

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
  listaReserva: Array<Reserva>;
  busqueda: string;
  constructor(private ps: PaqueteService,
              public modal: NgbModal,
              private toastr: ToastrService,
              private rs: ReservaService,
              private formaPagoService: FormapagoService,
              private usuarioService: UsuarioService) {
    this.resv = new Reserva();
    this.paq = new Paquete();
    this.listaPaquetes = new Array<Paquete>();
    this.actualizarTabla();
   }

  ngOnInit(): void {
  }
  public actualizarReserva(){
    this.listaReserva = new Array<Reserva>();
    let a = new Reserva();
    this.rs.actualizarT().subscribe(
      (result) => {
      for (let i of result)
      {

        Object.assign(a, i);
        this.listaReserva.push(a);
        a = new Reserva();
      }
      }
    );
  }

  public actualizarTabla(){
    this.listaPaquetes = new Array<Paquete>();
    let a = new Paquete();
    this.ps.actualizarT().subscribe(
      (result) => {
      for (let i of result)
      {
        Object.assign(a, i);
        if(a.alojamiento != null && a.transporte != null)
        {
          this.listaPaquetes.push(a);
        }
       
        a = new Paquete();
      }
      }
    );
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
    this.resv.fecha = f;
    this.resv.paquete = this.paq;
    this.resv.estado = true;
    this.resv.usuario = this.usuarioService.usuarioLogeado;
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
  public buscarpaqueteporDestino()
  {
    this.ps.busqueda(this.busqueda).subscribe(
    (result) => {
      let a = new Paquete();
      if (result.length == 0)
      {
        this.toastr.info('encontro ningun paquete con ese destino', ' vuelva a intentarlo');
        this.actualizarTabla();
      }
      else{
        for (let i of result)
        {
          Object.assign(a, i);
          if (this.ps.paquetesbuscado == null)
          {
            this.ps.paquetesbuscado = new Array<Paquete>();
          }
          this.ps.paquetesbuscado.push(a);
          a = new Paquete();
        }
        Object.assign(this.listaPaquetes, this.ps.paquetesbuscado);
      }
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

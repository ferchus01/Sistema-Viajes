import { Component, OnInit } from '@angular/core';

import { PaqueteService } from 'src/app/services/paquete.service';
import { Paquete } from 'src/app/models/paquete';
import { Reserva } from 'src/app/models/reserva';
import { Formapago } from 'src/app/models/formapago';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ReservaService } from 'src/app/services/reserva.service';
import { FormapagoService } from 'src/app/services/formapago.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ToastrService } from 'ngx-toastr';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  precioFinal: number;
  paq: Paquete;
  resv: Reserva;
  listaPaquetes: Array<Paquete>;
  listadeFormaPago: Array<Formapago>;
  listaReserva: Array<Reserva>;
  constructor(private ps: PaqueteService,
    public modal: NgbModal,
    private rs: ReservaService,
    private toastr: ToastrService,
    private formaPagoService: FormapagoService,
    private usuarioService: UsuarioService) {
      this.resv = new Reserva();
      this.paq = new Paquete();
      this.listadeFormaPago= new Array<Formapago>();
this.listaPaquetes = new Array<Paquete>();
this.actualizarTabla();
}
  ngOnInit(): void {
  }

  // ABM paquete

  public actualizarTabla(){
    this.listaPaquetes = new Array<Paquete>();
    let a = new Paquete();
    this.ps.actualizarT().subscribe(
      (result) => {
      for (let i of result)
      {
        Object.assign(a, i);
        this.listaPaquetes.push(a);
        a = new Paquete();
      }
      }
    );
  }
  public elegirPaquete(paquete: Paquete){
    Object.assign( this.paq , paquete);
    this.precioFinal = this.paq.cantPersonas * this.paq.precio;
  }

  /*Reserva*/
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
      },
      (error) => {
        this.toastr.error('no se pudo Reservar el Paquete', 'Error');
      }
      );
  }
  
}

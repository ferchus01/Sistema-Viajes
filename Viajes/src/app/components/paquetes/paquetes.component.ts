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
import { Promocion } from 'src/app/models/promocion';
import { PromocionService } from 'src/app/services/promocion.service';

@Component({
  selector: 'app-paquetes',
  templateUrl: './paquetes.component.html',
  styleUrls: ['./paquetes.component.css']
})
export class PaquetesComponent implements OnInit {
  porcentaje:number;
  precioPersona:number;
  precioFinal:number;
  prom: Promocion;
  cuo:number=0;
  listapromocion: Array<Promocion>;
  paq: Paquete;
  resv: Reserva;
  listaPaquetes: Array<Paquete>;
  listadeFormaPago: Array<Formapago>;
  listaReserva: Array<Reserva>;
  reservamd: Reserva;
  busqueda: string;
  constructor(private ps: PaqueteService,
              public modal: NgbModal,
              private toastr: ToastrService,
              private rs: ReservaService,
              private formaPagoService: FormapagoService,
              private usuarioService: UsuarioService,
              private promocionService: PromocionService) {
    this.prom = new Promocion();
    this.listapromocion = new Array<Promocion>();     
    this.resv = new Reserva();
    this.paq = new Paquete();
    this.listaPaquetes = new Array<Paquete>();
    this.actualizarTabla();
    this.reservamd = new Reserva();
    this.actualizarReserva();
    this.obtenerPromociones()
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
  public elegirReserva(reserva: Reserva)
  {
    Object.assign(this.reservamd, reserva);
    this.reservamd.paquete = this.listaPaquetes.find((item: Paquete) => item._id === reserva.paquete._id);
  }
  public buscarpaqueteporDestino()
  {
    this.ps.busqueda(this.busqueda).subscribe(
    (result) => {
      let a = new Paquete();
      if (result.length == 0)
      {
        this.toastr.warning('encontro ningun paquete con ese destino', ' vuelva a intentarlo');
        this.actualizarTabla();
      }
      else{
        this.listaPaquetes=new Array<Paquete>();
        Object.assign(this.listaPaquetes,result);
        // for (let i of result)
        // {
        //   Object.assign(a, i);
        //   if (this.ps.paquetesbuscado == null)
        //   {
        //     this.ps.paquetesbuscado = new Array<Paquete>();
        //   }
        //   this.ps.paquetesbuscado.push(a);
        //   a = new Paquete();
        // }
        // Object.assign(this.listaPaquetes, this.ps.paquetesbuscado);
      }
    }
    );
  }
  public modificarReserva()
  {
    this.rs.modificarReserva(this.reservamd).subscribe(
    (result)=>{
      this.toastr.success('Reserva  modificada Correctamente', 'Confirmado');
      this.reservamd = new Reserva();
      this.actualizarReserva();
    }
  )
  }

  /*promociones*/
  public obtenerPromociones(){
    this.listapromocion = new Array<Promocion>();
    this.promocionService.listadePromocion().subscribe(
      (result) => {
        let a = new Promocion();
        for (let r of result){
          Object.assign(a, r);
          if (a.paqueteTuristico != null)
          {
            this.listapromocion.push(a);
          }
          a = new Promocion();
        }
      }
    );
  }

  public seleccionarPromociones(promocion: Promocion){
    Object.assign(this.prom, promocion);

    this.prom.paqueteTuristico = this.listaPaquetes.find((item: Paquete) => item._id === promocion.paqueteTuristico._id);
    this.porcentaje = (this.prom.descuento * this.prom.paqueteTuristico.precio) / 100;
    this.precioPersona = this.prom.paqueteTuristico.precio - this.porcentaje;
    this.precioFinal = this.prom.paqueteTuristico.cantPersonas * this.precioPersona;
  }

}

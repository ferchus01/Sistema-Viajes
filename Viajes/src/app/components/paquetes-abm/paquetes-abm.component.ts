import { Component, OnInit } from '@angular/core';
import { Paquete } from 'src/app/models/paquete';
import { PaqueteService } from 'src/app/services/paquete.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import {ProveedorAlojamiento} from 'src/app/models/proveedor-alojamiento'
import {ProveedorTransporte} from 'src/app/models/proveedor-transporte'
import { ProveedorAlojamientoService } from 'src/app/services/proveedor-alojamiento.service';
import { ProveedorTransporteService } from 'src/app/services/proveedor-transporte.service';
@Component({
  selector: 'app-paquetes-abm',
  templateUrl: './paquetes-abm.component.html',
  styleUrls: ['./paquetes-abm.component.css']
})
export class PaquetesAbmComponent implements OnInit {

  submitted: boolean = false;
  paq:Paquete;
  paqmod: Paquete;
  listaPaquetes:Array<Paquete>;
  listaAlojamiento : Array<ProveedorAlojamiento>;
  listaTransporte : Array<ProveedorTransporte>;
  constructor(private ps:PaqueteService,public modal:NgbModal,private toastr:ToastrService, private alojamientoService : ProveedorAlojamientoService, private transporteService : ProveedorTransporteService) {
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

  //ABM paquete

  public actualizarTabla(){
    this.listaPaquetes=new Array<Paquete>();
    this.ps.actualizarT().subscribe(
      (result)=>{
        Object.assign(this.listaPaquetes,result);
      }
    )
    // this.toastr.success('paquetes Cargados','Confirmado')
    console.log(this.listaPaquetes);
  }
  
  public elegirPaquete(paquete:Paquete){
    Object.assign( this.paq , paquete);
  }

  public agregarPaquete(){
    this.paq.transporte = this.paq.transporte[0];
    this.paq.alojamiento = this.paq.alojamiento[0];
    this.ps.agregarAsis(this.paq).subscribe(
      (result)=>{
        this.toastr.success('Paquete Creado Correctamente','Confirmado')
      },
      (error)=>{
        this.toastr.error('no se pudo crear un paquete','Error')
        console.log(error);
      }
    );
    console.log(this.paq);
    this.paq=new Paquete();
    this.actualizarTabla();
  }

  public eliminarPaquete(paquete:Paquete){
    this.ps.EliminarA(paquete).subscribe(
      (result)=>{
        this.toastr.success('Paquete Eliminado Correctamente','Confirmado')
        this.actualizarTabla();
      },
      (error)=>{
        this.toastr.error('no se pudo eliminar el paquete','Error')

      }
    )
  }

  public modificarPaquete(){
    this.ps.modificar(this.paq).subscribe(
      (result)=>{
        this.toastr.info('Paquete Modificado Correctamente','Confirmado')
        this.paq=new Paquete();
        this.actualizarTabla();
      },
      (error)=>{
        this.toastr.error('no se pudo modificar el paquete','Error')
      }
    )

  }

  //TRANSPORTE
  public obtenerListaDeTransporte()
  {
    this.listaTransporte= new Array<ProveedorTransporte>();
    this.transporteService.listaTransporte().subscribe(
      (result)=>{
        Object.assign(this.listaTransporte, result);
        console.log(this.listaTransporte);
      },
      (error) =>
      {
        this.toastr.error('no se pudo crear','Error')
      }
    )
  }

  //ALOJAMIENTO
  public obtenerListaDeAlojamiento()
  {
    this.listaAlojamiento= new Array<ProveedorAlojamiento>();
    this.alojamientoService.listaPaProveedoresAlojamiento().subscribe(
      (result)=>{
        Object.assign(this.listaAlojamiento, result);
      },
      (error) =>
      {
        this.toastr.error('no se pudo crear','Error')
      }
    )
  }

  public limpiarModal(a:string){
    switch(a){
      case 'nuevo-paquete': this.paq = new Paquete();break;
      case 'mod-paquete': this.paqmod = new Paquete(); break;
    }
    this.modal.dismissAll();
  }
}

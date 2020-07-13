import { Component, OnInit } from '@angular/core';
import { Paquete } from 'src/app/models/paquete';
import { PaqueteService } from 'src/app/services/paquete.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { ReservaService } from 'src/app/services/reserva.service';
import { Reserva } from 'src/app/models/reserva';

@Component({
  selector: 'app-paquetes',
  templateUrl: './paquetes.component.html',
  styleUrls: ['./paquetes.component.css']
})
export class PaquetesComponent implements OnInit {
  paq:Paquete;
  resv:Reserva;
  listaPaquetes:Array<Paquete>;

  constructor(private ps:PaqueteService,public modal:NgbModal,private toastr:ToastrService,private rs:ReservaService) {
    this.resv=new Reserva();
    this.paq = new Paquete();
    this.listaPaquetes=new Array<Paquete>();
    this.actualizarTabla();
   }

  ngOnInit(): void {
  }

  public actualizarTabla(){
    this.listaPaquetes=new Array<Paquete>();
    this.ps.actualizarT().subscribe(
      (result)=>{
        Object.assign(this.listaPaquetes,result);
      }
    )
    this.toastr.success('paquetes Cargados','Confirmado')
    console.log(this.listaPaquetes);
  }
  
  public elegirPaquete(paquete:Paquete){
    this.paq = paquete;
  }
  public agregarReserva(){
    var f=new Date();
    this.resv.fecha=f.toDateString();
    this.resv.paquete=this.paq;
     
    this.rs.agregarResv(this.resv).subscribe(
      (result)=>{
        this.toastr.success('Reservado Correctamente','Confirmado')
      },
      (error)=>{
        this.toastr.error('no se pudo Reservar el Paquete','Error')
        console.log(error);
      }
      );
      console.log(this.paq);
      this.paq=new Paquete();
      this.resv=new Reserva();
      this.actualizarTabla();
  }

  public agregarPaquete(){
     
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
      },
      (error)=>{
        this.toastr.error('no se pudo eliminar el paquete','Error')
        console.log(error);
      }
    )
    this.actualizarTabla();
  }

  public modificarPaquete(){
    this.ps.modificar(this.paq).subscribe(
      (result)=>{
        this.toastr.info('Paquete Modificado Correctamente','Confirmado')
      },
      (error)=>{
        this.toastr.error('no se pudo modificar el paquete','Error')
        console.log(error);
      }
    )
    this.paq=new Paquete();
    this.actualizarTabla();
  }

}

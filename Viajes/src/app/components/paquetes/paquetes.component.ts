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
    );
  }
  
  public elegirPaquete(paquete:Paquete){
    Object.assign(this.paq , paquete);
  }
  public agregarReserva(){
    var f=new Date();
    this.resv.fecha=f;
    this.resv.paquete=this.paq;
    this.rs.agregarResv(this.resv).subscribe(
      (result)=>{
        this.toastr.success('Reservado Correctamente','Confirmado')
        this.paq=new Paquete();
        this.resv=new Reserva();
        this.actualizarTabla();
      },
      (error)=>{
        this.toastr.error('no se pudo Reservar el Paquete','Error')
      }
      );
  }

  public agregarPaquete(){
     
    this.ps.agregarAsis(this.paq).subscribe(
      (result)=>{
        this.toastr.success('Paquete Creado Correctamente','Confirmado')
        this.paq=new Paquete();
        this.actualizarTabla();
      },
      (error)=>{
        this.toastr.error('no se pudo crear un paquete','Error')
        console.log(error);
      }
      );
      console.log(this.paq);

  }

  public eliminarPaquete(paquete:Paquete){
    this.ps.EliminarA(paquete).subscribe(
      (result)=>{
        this.toastr.success('Paquete Eliminado Correctamente','Confirmado')
        this.actualizarTabla();
      },
      (error)=>{
        this.toastr.error('no se pudo eliminar el paquete','Error')
        console.log(error);
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
        console.log(error);
      }
    )

  }

}

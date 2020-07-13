import { Component, OnInit } from '@angular/core';
import { Paquete } from 'src/app/models/paquete';
import { PaqueteService } from 'src/app/services/paquete.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-paquetes-abm',
  templateUrl: './paquetes-abm.component.html',
  styleUrls: ['./paquetes-abm.component.css']
})
export class PaquetesAbmComponent implements OnInit {

  paq:Paquete;
  listaPaquetes:Array<Paquete>;

  constructor(private ps:PaqueteService,public modal:NgbModal,private toastr:ToastrService) {
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

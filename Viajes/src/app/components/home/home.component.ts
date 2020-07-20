import { Component, OnInit } from '@angular/core';

import { PaqueteService } from 'src/app/services/paquete.service';
import { Paquete } from 'src/app/models/paquete';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listaPaquete: Array<Paquete>;
  constructor(private paqueteService: PaqueteService) {
    this.listaPaquete = new Array<Paquete>();
    this.obtenerpaquetes();
   }

  ngOnInit(): void {
  }
  obtenerpaquetes()
  {
    this.listaPaquete = new Array<Paquete>();
    this.paqueteService.actualizarT().subscribe(
      (result) =>
      {
        Object.assign(this.listaPaquete, result);
      }
    );
  }

}

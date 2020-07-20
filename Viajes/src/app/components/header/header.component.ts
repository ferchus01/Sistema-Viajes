import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/models/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  log = false;
  usuarioLoageado: Usuario;
  constructor(public usuarioService: UsuarioService, private router: Router) {
    this.usuarioLoageado = new Usuario();
   }

  ngOnInit(): void {
  }
  login()
  {
    this.usuarioService.login(this.usuarioLoageado.nombreusuario, this.usuarioLoageado.password).subscribe(
      (resultado) => {
        console.log(resultado);
        this.usuarioService.usuariologIn = resultado.status === 1;
        this.usuarioService.usuarioLogeado = new Usuario();
        Object.assign( this.usuarioService.usuarioLogeado, resultado);
        this.router.navigate(['/paquetesAbm']);
        this.usuarioLoageado = new Usuario();
        }
    );
    }
    cerrarSession()
    {
      this.usuarioService.logeout();
      this.router.navigate(['/home']);
      this.usuarioLoageado = new Usuario();
    }
  }


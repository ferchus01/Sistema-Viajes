import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/models/usuario';
import { Router } from '@angular/router';
import { TipoUsuario } from 'src/app/models/tipo-usuario';
import { TipousuarioService } from 'src/app/services/tipousuario.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  log = false;
  usuarioLoageado: Usuario;
  tipUsu: TipoUsuario;
  listTipoUsu: Array<TipoUsuario>;
  usu: Usuario;

    // tslint:disable-next-line: max-line-length
    constructor(public modal: NgbModal, private toastr: ToastrService, public usuarioService: UsuarioService, public tus: TipousuarioService, private router: Router) {
    this.usuarioLoageado = new Usuario();
    this.tipUsu = new TipoUsuario();
    this.usu = new Usuario();
    this.listTipoUsu = new Array<TipoUsuario>();
    this.obtenerTipoUsuarios();
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
        const r = new TipoUsuario();
        Object.assign(r, resultado.tipousuario);
        this.usuarioService.usuarioLogeado.tipousuario = r;
        if (this.usuarioService.usuarioLogeado.tipousuario.descripcion === 'agente'){
        this.router.navigate(['/paquetesAbm']);
        }
        else{
          this.router.navigate(['/paquetes']);
        }
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
    public obtenerTipoUsuarios(){
      this.listTipoUsu =  new Array<TipoUsuario>();
      this.tus.listadeTipoUsuario().subscribe(
        (result) => {
          let e = new TipoUsuario();
          for (const a of result)
          {
            Object.assign(e, a);
            this.listTipoUsu.push(e);
            e = new TipoUsuario();
          }
        },
        (error) =>
        {
          this.toastr.error('no se pudo crear', 'Error');
        }
      );
    }

    public agregarUsuario(){
      console.log(this.usu);
      this.tipoCliente();
      this.usuarioService.agregarUsuario(this.usu).subscribe(
        (resultado) =>
        {
          this.toastr.success('usuario agregado', 'operacion exitosa');
          this.usu = new Usuario();
        }
      );
    }
    tipoCliente(){
      for (let a of this.listTipoUsu){
        this.tipUsu = new TipoUsuario();
        if (a.descripcion == 'cliente'){
          Object.assign(this.tipUsu, a);
          this.usu.tipousuario = this.tipUsu;
        }
      }
    }
  }


import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioService } from '../services/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  // tslint:disable-next-line: variable-name
  constructor(private usuarioService: UsuarioService, private _router: Router)
  {
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (!this.usuarioService.usuariologIn)
      {
        alert('no tiene acceso');
        this._router.navigate(['/home']);
      }
      return this.usuarioService.usuariologIn;
  }

}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PaquetesComponent } from './components/paquetes/paquetes.component';
import { PaquetesAbmComponent } from './components/paquetes-abm/paquetes-abm.component';
import {AuthGuard} from '../app/guards/auth.guard';


const routes: Routes = [
 { path: 'home', component: HomeComponent },
 { path: 'paquetes', component: PaquetesComponent , canActivate : [AuthGuard]},
 { path: 'paquetesAbm', component: PaquetesAbmComponent, canActivate : [AuthGuard] },
// { path: 'punto4', component: Punto4Component },
 { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

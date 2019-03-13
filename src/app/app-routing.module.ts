import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio/inicio.component';
import { RegistroNuevoUsuarioComponent } from './registro-nuevo-usuario/registro-nuevo-usuario.component';

const routes: Routes = [
  {path:'inicio', component: InicioComponent},
  {path:'registro', component: RegistroNuevoUsuarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
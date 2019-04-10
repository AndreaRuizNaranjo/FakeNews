import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio/inicio.component';
import { RegistroNuevoUsuarioComponent } from './registro-nuevo-usuario/registro-nuevo-usuario.component';
import { PerfilPeriodistaComponent } from './perfil-periodista/perfil-periodista.component';
import { PerfilValidadorComponent } from './perfil-validador/perfil-validador.component';
import { NuevaNoticiaComponent } from './nueva-noticia/nueva-noticia.component';
import { NoticiasPorValidarComponent } from './noticias-por-validar/noticias-por-validar.component';
import { OlvideMiClaveComponent } from './olvide-mi-clave/olvide-mi-clave.component';
import { ValidarNoticiaComponent } from './validar-noticia/validar-noticia.component';

const routes: Routes = [
  {path:'inicio', component: InicioComponent},
  {path:'registro', component: RegistroNuevoUsuarioComponent},
  {path:'periodista', component: PerfilPeriodistaComponent},
  {path:'validador', component: PerfilValidadorComponent},
  {path:'validar-noticia', component: ValidarNoticiaComponent},
  {path:'noticias-por-validar', component: NoticiasPorValidarComponent},
  {path:'olvide-mi-clave', component: OlvideMiClaveComponent},
  {path:'nueva-noticia', component: NuevaNoticiaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

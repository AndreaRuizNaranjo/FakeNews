import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio/inicio.component';
import { RegistroNuevoUsuarioComponent } from './registro-nuevo-usuario/registro-nuevo-usuario.component';
import { PerfilPeriodistaComponent } from './perfil-periodista/perfil-periodista.component';
import { PerfilValidadorComponent } from './perfil-validador/perfil-validador.component';
import { NuevaNoticiaComponent } from './nueva-noticia/nueva-noticia.component';
import { OlvideMiClaveComponent } from './olvide-mi-clave/olvide-mi-clave.component';
import { ValidarNoticiaComponent } from './validar-noticia/validar-noticia.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { NoticiasValidadasComponent } from './noticias-validadas/noticias-validadas.component';
import { NoticiasCargadasComponent } from './noticias-cargadas/noticias-cargadas.component';

const routes: Routes = [
  {path:'', component: InicioComponent},
  {path:'registro', component: RegistroNuevoUsuarioComponent},
  {path:'periodista', component: PerfilPeriodistaComponent},
  {path:'validador', component: PerfilValidadorComponent},
  {path:'validador/validar-noticia', component: ValidarNoticiaComponent},
  {path:'olvide-mi-clave', component: OlvideMiClaveComponent},
  {path:'periodista/nueva-noticia', component: NuevaNoticiaComponent},
  {path:'main-nav', component: MainNavComponent},
  {path:'validador/noticias-validadas', component: NoticiasValidadasComponent},
  {path:'periodista/noticias-cargadas', component: NoticiasCargadasComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

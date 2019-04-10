
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore';
import { environment} from '../environments/environment';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HeaderComponent } from './header/header.component';
import { InicioComponent } from './inicio/inicio/inicio.component';
import { RegistroNuevoUsuarioComponent } from './registro-nuevo-usuario/registro-nuevo-usuario.component';
import { PerfilPeriodistaComponent } from './perfil-periodista/perfil-periodista.component';
import { PerfilValidadorComponent } from './perfil-validador/perfil-validador.component';
import { NuevaNoticiaComponent } from './nueva-noticia/nueva-noticia.component';
import { ValidarNoticiaComponent } from './validar-noticia/validar-noticia.component';
import { NoticiasPorValidarComponent } from './noticias-por-validar/noticias-por-validar.component';
import { OlvideMiClaveComponent } from './olvide-mi-clave/olvide-mi-clave.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InicioComponent, 
    RegistroNuevoUsuarioComponent,
    PerfilPeriodistaComponent,
    PerfilValidadorComponent,
    NuevaNoticiaComponent,
    ValidarNoticiaComponent, 
    NoticiasPorValidarComponent, 
    OlvideMiClaveComponent 
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    ChartsModule
 
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }

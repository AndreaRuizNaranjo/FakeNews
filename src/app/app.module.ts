import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HeaderComponent } from './header/header/header.component';
import { InicioComponent } from './inicio/inicio/inicio.component';
import { RegistroNuevoUsuarioComponent } from './registro-nuevo-usuario/registro-nuevo-usuario.component';

@NgModule({
  imports:      [ BrowserModule, AppRoutingModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, HeaderComponent, InicioComponent, RegistroNuevoUsuarioComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }

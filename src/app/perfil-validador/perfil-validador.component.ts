import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Nuevanoticia } from '../nueva-noticia/nueva-noticia.component';
import {nuevanoticia} from '../nueva-noticia/nuevanoticia';

@Component({
  selector: 'app-perfil-validador',
  templateUrl: './perfil-validador.component.html',
  styleUrls: ['./perfil-validador.component.css']
})
export class PerfilValidadorComponent {

  
}
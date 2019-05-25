import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFirestore , AngularFirestoreCollection} from '@angular/fire/firestore';
import { HttpClient } from '@angular/common/http';

export interface Nuevanoticia {
  fecha: Date;
  fuente: string;
  comment: string;
  sujeto: string;
 
 }

@Component({
  selector: 'app-nueva-noticia',
  templateUrl: './nueva-noticia.component.html',
  styleUrls: ['./nueva-noticia.component.css']
})
export class NuevaNoticiaComponent {

  private db: AngularFirestore;
  userCollectionRef: AngularFirestoreCollection<Nuevanoticia>;
  items: Nuevanoticia[];

  constructor( private http:HttpClient) {
   

  }

  createNoticia(fecha: Date, fuente: string, comment: string, sujeto: string){
    return this.db.collection('FormularioNuevaNoticia').add({
      fecha: fecha,
      fuente: fuente,
      comment: comment,
      sujeto: sujeto
    });
  }
}
import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFirestore , AngularFirestoreCollection} from '@angular/fire/firestore';
import { HttpClient } from '@angular/common/http';

export interface Nuevanoticia {
    titulo: string;
    autor: string;
    fuente: string;
    fecha: string;
    descripcion: string;
    validado: boolean;
 
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

  createNoticia(titulo: string, autor: string, fuente: string, fecha: string, descripcion: string, validado: boolean){
    console.log("fadfds");
  
    return this.http.post('http://localhost:8080/myapp/fakenews' , {
      titulo: titulo,
      autor: autor,
      fuente: fuente,
      fecha: fecha,
      descripcion: descripcion,
      validado: validado
    }).subscribe(
      res => {console.log(res)},err => {console.log(err)}
    );
  }
}
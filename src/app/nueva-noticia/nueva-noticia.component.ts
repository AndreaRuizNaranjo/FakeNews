import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFirestore , AngularFirestoreCollection} from '@angular/fire/firestore';

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

  constructor(db: AngularFirestore) {
    this.db = db;
    this.userCollectionRef = db.collection<Nuevanoticia>('FormularioNuevaNoticia');
   
    this.userCollectionRef.snapshotChanges().subscribe( data =>{
  	if (data) {
  		this.items = data.map( item =>{
        const data = item.payload.doc.data() as Nuevanoticia;
        data.sujeto = item.payload.doc.id;
        return data;
      });
  	}
   }, 
   err => console.log('Error ' + err),
   () => console.log('yay'))

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
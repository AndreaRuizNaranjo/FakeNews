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

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

    private db: AngularFirestore;
    userCollectionRef: AngularFirestoreCollection<Nuevanoticia>;
    items: Nuevanoticia[];
  
    constructor(db: AngularFirestore, private breakpointObserver: BreakpointObserver) {
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
    public getNoticiasporvalidar() {
      return this.db.collection('FormularioNuevaNoticia').snapshotChanges();
    }
}
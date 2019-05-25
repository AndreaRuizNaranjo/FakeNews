import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Nuevanoticia } from '../nueva-noticia/nueva-noticia.component';
<<<<<<< HEAD:src/app/noticias-por-validar/noticias-por-validar.component.ts
import {nuevanoticia} from '../nueva-noticia/nuevanoticia';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-noticias-por-validar',
  templateUrl: './noticias-por-validar.component.html',
  styleUrls: ['./noticias-por-validar.component.css']
  
=======
import { nuevanoticia } from '../nueva-noticia/nuevanoticia';

@Component({
  selector: 'app-noticias-validadas',
  templateUrl: './noticias-validadas.component.html',
  styleUrls: ['./noticias-validadas.component.css']
>>>>>>> 1c6943891d2af0e9e8f5c6aeda1e4fecffc87d93:src/app/noticias-validadas/noticias-validadas.component.ts
})
export class NoticiasValidadasComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  private db: AngularFirestore;
  userCollectionRef: AngularFirestoreCollection<Nuevanoticia>;
  items: Nuevanoticia[];

<<<<<<< HEAD:src/app/noticias-por-validar/noticias-por-validar.component.ts
  constructor(private breakpointObserver: BreakpointObserver, private http:HttpClient) {
  
  }
  ngOnInit(): void {
    this.http.get<nuevanoticia>('http://localhost:8080/myapp/fakenews').subscribe(data=>{
      console.log(data);
  
  });
}
=======
  constructor(db: AngularFirestore, private breakpointObserver: BreakpointObserver) {
    this.db = db;
    this.userCollectionRef = db.collection<Nuevanoticia>('FormularioNuevaNoticia');

    this.userCollectionRef.snapshotChanges().subscribe(data => {
      if (data) {
        this.items = data.map(item => {
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

>>>>>>> 1c6943891d2af0e9e8f5c6aeda1e4fecffc87d93:src/app/noticias-validadas/noticias-validadas.component.ts
}
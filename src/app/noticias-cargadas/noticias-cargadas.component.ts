import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Nuevanoticia } from '../nueva-noticia/nueva-noticia.component';
import {nuevanoticia} from '../nueva-noticia/nuevanoticia';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-noticias-cargadas',
  templateUrl: './noticias-cargadas.component.html',
  styleUrls: ['./noticias-cargadas.component.css']
})
export class NoticiasCargadasComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

    private db: AngularFirestore;
    userCollectionRef: AngularFirestoreCollection<Nuevanoticia>;
    items: Nuevanoticia[];
  
    constructor(private http:HttpClient, private breakpointObserver: BreakpointObserver) {
    }

    ngOnInit(): void {
      this.http.get<nuevanoticia[]>('http://localhost:8080/myapp/fakenews').subscribe(data=>{
        this.items = data;
    });
  }
}
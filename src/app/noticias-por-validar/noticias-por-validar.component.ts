import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFirestore , AngularFirestoreCollection} from '@angular/fire/firestore';
import { Nuevanoticia } from '../nueva-noticia/nueva-noticia.component';
import {nuevanoticia} from '../nueva-noticia/nuevanoticia';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-noticias-por-validar',
  templateUrl: './noticias-por-validar.component.html',
  styleUrls: ['./noticias-por-validar.component.css']
  
})
export class NoticiasPorValidarComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches)
  );


	private db: AngularFirestore;
  userCollectionRef: AngularFirestoreCollection<Nuevanoticia>;
  items: Nuevanoticia[];

  constructor(private breakpointObserver: BreakpointObserver, private http:HttpClient) {
  
  }
  ngOnInit(): void {
    this.http.get<nuevanoticia>('http://localhost:8080/myapp/fakenews').subscribe(data=>{
      console.log(data);
  
  });
}
}
import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Nuevanoticia } from '../nueva-noticia/nueva-noticia.component';
import {nuevanoticia} from '../nueva-noticia/nuevanoticia';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-perfil-periodista',
  templateUrl: './perfil-periodista.component.html',
  styleUrls: ['./perfil-periodista.component.css']
})
export class PerfilPeriodistaComponent {
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

    items: Nuevanoticia[];
  
  
    constructor(private breakpointObserver: BreakpointObserver, private http:HttpClient) {
    
    
    }
     
    ngOnInit(): void {
      this.http.get<nuevanoticia[]>('http://localhost:8080/myapp/fakenews').subscribe(data=>{
        this.items = data;
    });
   
    
    }

}
import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Nuevanoticia } from '../nueva-noticia/nueva-noticia.component';
import { HttpClient } from '@angular/common/http';
import { nuevanoticia } from '../nueva-noticia/nuevanoticia';


@Component({
  selector: 'app-validar-noticia',
  templateUrl: './validar-noticia.component.html',
  styleUrls: ['./validar-noticia.component.css']
})
export class ValidarNoticiaComponent {
  
  
 
    items: nuevanoticia[];

  
    constructor(private http:HttpClient, private breakpointObserver: BreakpointObserver) {
     
    }
    
    ngOnInit(): void {
      this.http.get<nuevanoticia[]>('http://localhost:8080/myapp/fakenews').subscribe(data=>{
        this.items = data;
    });
    
  }

  ModificarNoticia(validado: boolean){
    console.log("fadfds");
  
    return this.http.put('http://localhost:8080/myapp/fakenews/fghj' , {
 
      validado: validado
    }).subscribe(
      res => {console.log(res)},err => {console.log(err)}
    );
  }


}
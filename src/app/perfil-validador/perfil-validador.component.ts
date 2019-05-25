import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Nuevanoticia } from '../nueva-noticia/nueva-noticia.component';
import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';


export interface Nuevanoticia {
  titulo: string;
  autor: string;
  fuente: string;
  fecha: string;
  descripcion: string;
  validado: boolean;
}

@Component({
  selector: 'app-perfil-validador',
  templateUrl: './perfil-validador.component.html',
  styleUrls: ['./perfil-validador.component.css']
})

export class PerfilValidadorComponent {
  constructor(private http: HttpClient, private breakpointObserver: BreakpointObserver) { }
  httpdataNoticias;
  ngOnInit() {
    this.http.get<Nuevanoticia>('http://localhost:8080/myapp/fakenews').subscribe( data=>   
    {console.log(data)});
  
}
}





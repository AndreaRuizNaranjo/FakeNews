import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Nuevanoticia } from '../nueva-noticia/nueva-noticia.component';
import {nuevanoticia} from '../nueva-noticia/nuevanoticia';



@Component({
  selector: 'app-perfil-validador',
  templateUrl: './perfil-validador.component.html',
  styleUrls: ['./perfil-validador.component.css']
})

export class PerfilValidadorComponent {
  items: Nuevanoticia[];

  constructor(private http: HttpClient, private breakpointObserver: BreakpointObserver) { }
  httpdataNoticias;
  ngOnInit() {
    this.http.get<nuevanoticia[]>('http://localhost:8080/myapp/fakenews').subscribe(data=>{
        this.items = data;
    });
}
}
  


import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface olvidemiclave {
 idEmail: string;
 contrasena: string;
}

@Component({
  selector: 'app-olvide-mi-clave',
  templateUrl: './olvide-mi-clave.component.html',
  styleUrls: ['./olvide-mi-clave.component.css']
})
export class OlvideMiClaveComponent  {

  constructor(private http:HttpClient) { }

  createOlvideContrasena(contrasena: string) {
    console.log("fadfds");
  
    return this.http.put<olvidemiclave[]>('http://localhost:8080/myapp/fakenewsper/andrea' , {
    
      contrasena: contrasena
     
    }).subscribe(
      res => {console.log(res)},err => {console.log(err)}
    );
  }

}
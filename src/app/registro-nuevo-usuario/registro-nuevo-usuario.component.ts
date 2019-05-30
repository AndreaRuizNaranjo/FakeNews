import { Component, OnInit } from '@angular/core';
import { AngularFirestore , AngularFirestoreCollection} from '@angular/fire/firestore';
import { HttpClient } from '@angular/common/http';

export interface NuevoUsuario {
nombre: string;
email: string;
contrasena: string;
}


@Component({
  selector: 'app-registro-nuevo-usuario',
  templateUrl: './registro-nuevo-usuario.component.html',
  styleUrls: ['./registro-nuevo-usuario.component.css']
})
export class RegistroNuevoUsuarioComponent {

  private db: AngularFirestore;
  userCollectionRef: AngularFirestoreCollection<NuevoUsuario>;
  items:NuevoUsuario[];

  constructor(private http:HttpClient) {
  
  }

createUsuarioNuevo(nombre: string, email: string, contrasena: string){
  console.log("fadfds");
 
  return this.http.post('http://localhost:8080/myapp/fakenewsval', {
      nombre: nombre,
      email: email,
      contrasena: contrasena
    }).subscribe(
      res => {console.log(res)},err => {console.log(err)}
    );
  
}
}
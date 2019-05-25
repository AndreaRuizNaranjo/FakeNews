import { Component, OnInit } from '@angular/core';
import { AngularFirestore , AngularFirestoreCollection} from '@angular/fire/firestore';
import { HttpClient } from '@angular/common/http';

export interface NuevoUsuario {
name: string;
email: string;
password: string;
confirm_password: string;
tipoUsuario: boolean;
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

createUsuarioNuevo(name: string, email: string, password: string, confirm_password: string, tipoUsuario: boolean){
  return this.db.collection('CrearUsuario').add({
    name: name,
    email: email,
    password: password,
    confirm_password: confirm_password,
    tipoUsuario: tipoUsuario,
  });
}

}
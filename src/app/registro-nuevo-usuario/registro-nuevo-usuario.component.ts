import { Component, OnInit } from '@angular/core';
import { AngularFirestore , AngularFirestoreCollection} from '@angular/fire/firestore';

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

  constructor(db: AngularFirestore) {
    this.db = db;
    this.userCollectionRef = db.collection<NuevoUsuario>('CrearUsuario');
   
    this.userCollectionRef.snapshotChanges().subscribe( data =>{
  	if (data) {
  		this.items = data.map( item =>{
        const data = item.payload.doc.data() as NuevoUsuario;
        data.name = item.payload.doc.id;
        return data;
      });
  	}
   }, 
   err => console.log('Error ' + err),
   () => console.log('yay'))

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
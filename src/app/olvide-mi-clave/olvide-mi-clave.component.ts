import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-olvide-mi-clave',
  templateUrl: './olvide-mi-clave.component.html',
  styleUrls: ['./olvide-mi-clave.component.css']
})
export class OlvideMiClaveComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit() {
  }

}
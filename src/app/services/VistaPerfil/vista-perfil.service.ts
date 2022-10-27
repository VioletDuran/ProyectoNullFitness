import { Injectable } from '@angular/core';
import { vistaPerfil } from './vista-perfil.type';
//import rutinas from '../../../assets/datos/misRutinas.json';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class VistaPerfilService {
  url:string = '../../../assets/datos/misRutinas.json';
  constructor(private httpClient:HttpClient) {
  }
  
  ngOnInit(): void {
  }

  devolverRutinas(): Observable<any>{
    return this.httpClient.get(this.url);
  }

  encontrarRutina(id:string | any, rutinas:vistaPerfil[]){
    return rutinas.find(rutinas => rutinas.idRutina === id);
  }

}


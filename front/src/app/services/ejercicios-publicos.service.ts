import { Injectable } from '@angular/core';
import { EjerciciosPublicos } from "./ejercicios-publicos.type";
//import ejercicios from '../../assets/datos/ejercicios.json';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})


export class EjerciciosPublicosService {
  urlHttp:string = "http://localhost:3000/users";
  constructor(private httpClient:HttpClient) {
  }
  ngOnInit(): void {
  }

  devolverEjercicios(): Observable<any>{
    return this.httpClient.get(this.urlHttp + "/obtenerEjerciciosTotales/1");
  }

  retornarEjerciciosPrivados(arregloIds:String[], ejercicios:EjerciciosPublicos[]){
    let arrayEjerciciosAux:EjerciciosPublicos[] | any = [];
    for(let id in arregloIds){
      arrayEjerciciosAux.push(ejercicios.find(ejercicios => ejercicios.id === id));
    }
    return arrayEjerciciosAux;
  }

}

import { Injectable } from '@angular/core';
import { EjerciciosPublicos } from "./ejercicios-publicos.type";
//import ejercicios from '../../assets/datos/ejercicios.json';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})


export class EjerciciosPublicosService {
  url:string = '../../../assets/datos/ejercicios.json';
  constructor(private httpClient:HttpClient) {
  }
  ngOnInit(): void {
  }

  devolverEjercicios(): Observable<any>{
    return this.httpClient.get(this.url);
  }
  retornarEjerciciosPrivados(arregloIds:String[], ejercicios:EjerciciosPublicos[]){
    let arrayEjerciciosAux:EjerciciosPublicos[] | any = [];
    for(let id in arregloIds){
      arrayEjerciciosAux.push(ejercicios.find(ejercicios => ejercicios.id === id));
    }
    return arrayEjerciciosAux;
  }

}

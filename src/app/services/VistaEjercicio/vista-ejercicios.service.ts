import { Injectable } from '@angular/core';
import {VistaEjercicios} from './vista-ejercicios.type';

@Injectable({
  providedIn: 'root'
})
export class VistaEjerciciosService {
  arregloVistaEjercicio:VistaEjercicios[] = new Array(12);
  constructor() {
    this.generarNumeros()
  }
  generarNumeros(){
    for (let i = 0; i < 12; i++) {
      this.arregloVistaEjercicio[i] = {tituloEjercicio:"Ejercicio " + (i+1)};
      console.log(this.arregloVistaEjercicio[i].tituloEjercicio);
    }
  }
}

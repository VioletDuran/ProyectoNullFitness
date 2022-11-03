import { Injectable } from '@angular/core';
import {VistaRutinas} from './rutinas-publicas.type';


@Injectable({
  providedIn: 'root'
})
export class RutinasPublicasService {
  arregloRutinas:VistaRutinas[] = new Array(12);
  constructor() {
    this.generarNumeros()
  }
  generarNumeros(){
    for (let i = 0; i < 12; i++) {
      this.arregloRutinas[i] = {tituloRutina:"Rutina " + (i+1)};
    }
  }
}

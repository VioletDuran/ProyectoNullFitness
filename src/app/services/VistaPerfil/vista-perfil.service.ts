import { Injectable } from '@angular/core';
import { vistaPerfil } from './vista-perfil.type';

@Injectable({
  providedIn: 'root'
})
export class VistaPerfilService {
  arrayRutinas:vistaPerfil[] = [];
  constructor() {
    this.generarNumeros()
  }
  generarNumeros(){
    for (let i = 0; i < 6; i++) {
      this.arrayRutinas[i] = {tituloRutina:"Rutina " + (i+1)};
    }
  }
}


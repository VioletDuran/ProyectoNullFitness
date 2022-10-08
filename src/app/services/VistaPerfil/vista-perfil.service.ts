import { Injectable } from '@angular/core';
import { vistaPerfil } from './vista-perfil.type';
import rutinas from '../../../app/datos/misRutinas.json';

@Injectable({
  providedIn: 'root'
})
export class VistaPerfilService {
  arrayRutinas:vistaPerfil[] = [];
  constructor() {
    this.arrayRutinas = rutinas;
  }
}


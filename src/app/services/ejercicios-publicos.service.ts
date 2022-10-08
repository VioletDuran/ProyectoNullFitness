import { Injectable } from '@angular/core';
import { EjerciciosPublicos } from "./ejercicios-publicos.type";
import ejercicios from '../../app/datos/ejercicios.json';

@Injectable({
  providedIn: 'root'
})


export class EjerciciosPublicosService {
  ejerciciosPublicos: EjerciciosPublicos[] = [];



  constructor() {
    this.ejerciciosPublicos = ejercicios;
  }
  ngOnInit(): void {
  }
}

import { Component, OnInit } from '@angular/core';
import {EjerciciosPublicos} from "../../services/ejercicios-publicos.type";
import {EjerciciosPublicosService} from "../../services/ejercicios-publicos.service";

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent implements OnInit {

  ejerciciosTotales : EjerciciosPublicos[] | any = [];
  ejerciciopublico: EjerciciosPublicos[] = [];

  constructor(private ejerciciospublicos:EjerciciosPublicosService) { }

  ngOnInit(): void {
   this.ejerciciospublicos.devolverEjercicios().subscribe((valor) => {
      this.ejerciciosTotales = valor;
      this.ejerciciopublico = this.randomNumber(this.ejerciciosTotales);
    })
  }

  randomNumber(arreglo:EjerciciosPublicos[]){
    let currentIndex = arreglo.length,  randomIndex;

    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [arreglo[currentIndex], arreglo[randomIndex]] = [
        arreglo[randomIndex], arreglo[currentIndex]];
    }
  
    return arreglo;
  }

}

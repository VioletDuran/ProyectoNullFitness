import { Injectable } from '@angular/core';
import { EjerciciosPublicos } from "./ejercicios-publicos.type";

@Injectable({
  providedIn: 'root'
})

export class EjerciciosPublicosService {
  ejerciciosPublicos: EjerciciosPublicos[] = [];
  constructor() {
    this.ejerciciosPublicos = [
      {
        id: 1,
        tituloEjercicio: "Press de banca",
        tituloFoto: "Press de banca",
        foto: "../../../assets/img/press-banca-1.jpg",
        descripcion: "El press de banca es un ejercicio multiarticular que, lógicamente, no sólo implica a la musculatura pectoral. Por tanto, debemos de tener en cuenta cada uno de los músculos implicados en está acción para poder progresar en este ejercicio. Es uno de los mejores para trabajar el pecho."
      } as EjerciciosPublicos,
      {
        id: 2,
        tituloEjercicio: "Sentadilla con barra",
        tituloFoto: "sentadilla con barra",
        foto: "../../../assets/img/sentadilla.jpeg",
        descripcion: "La sentadilla con barra ha sido desde siempre uno de los ejercicios más conocidos y utilizados en el mundo del entrenamiento. Este ejercicio complejo nos permite trabajar grandes grupos musculares y nos dará grandes beneficios si lo hacemos de forma correcta."
      } as EjerciciosPublicos,
      {
        id: 3,
        tituloEjercicio: "Remo con barra",
        tituloFoto: "Remo con barra",
        foto: "../../../assets/img/remo.jpeg",
        descripcion: "El remo con barra es una alternativa para trabajar la espalda si no cuentas con una barra de dominadas. La posibilidad de poder variar el agarre y la amplitud del mismo, hacen del remo con barra un ejercicio de gimnasio polivalente para entrenar nuestra espalda en toda su extensión."
      } as EjerciciosPublicos,
    ]
  }
  ngOnInit(): void {
  }
}

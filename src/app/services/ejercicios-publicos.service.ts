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
        id: "0",
        tituloEjercicio: "Press de banca",
        tituloFoto: "Press de banca",
        foto: "../../../assets/img/press-banca-1.jpg",
        descripcion: "El press de banca es un ejercicio multiarticular que, lógicamente, no sólo implica a la musculatura pectoral. Por tanto, debemos de tener en cuenta cada uno de los músculos implicados en está acción para poder progresar en este ejercicio. Es uno de los mejores para trabajar el pecho.",
        tituloSegundo: "Musculos trabajados en Press de banca",
        descripcionMusculos: ["Músculos agonistas: pectoral mayor y pectoral menor.","Músculos sinergistas: deltoides anterior y tríceps.", "Músculos antagonistas: deltoides posterior, dorsal y bíceps"],
        video: "https://www.youtube.com/embed/GeLq8cMODLc"
        
      } as EjerciciosPublicos,
      {
        id: "1",
        tituloEjercicio: "Sentadilla con barra",
        tituloFoto: "Sentadilla con barra",
        foto: "../../../assets/img/sentadilla.jpeg",
        descripcion: "La sentadilla con barra ha sido desde siempre uno de los ejercicios más conocidos y utilizados en el mundo del entrenamiento. Este ejercicio complejo nos permite trabajar grandes grupos musculares y nos dará grandes beneficios si lo hacemos de forma correcta.",
        tituloSegundo: "Musculos trabajados en Sentadilla",
        descripcionMusculos: ["Glúteo mayor.","cuádriceps e isquiotibiales."],
        video: "https://www.youtube.com/embed/YOPq7v0mcuI"
      } as EjerciciosPublicos,
      {
        id: "2",
        tituloEjercicio: "Remo con barra",
        tituloFoto: "Remo con barra",
        foto: "../../../assets/img/remo.jpeg",
        descripcion: "El remo con barra es una alternativa para trabajar la espalda si no cuentas con una barra de dominadas. La posibilidad de poder variar el agarre y la amplitud del mismo, hacen del remo con barra un ejercicio de gimnasio polivalente para entrenar nuestra espalda en toda su extensión.",
        tituloSegundo: "Musculos trabajados en Remo con Barra",
        descripcionMusculos: ["Musculatura de la espalda.","Bíceps braquiales.","Braquiorradial.","Trapecios.","Deltoides posterior.","Redondo mayor y Redondo menor.","Dorsal ancho.","Zona externa del pectoral superior.","Romboide.","Infraespinoso.","Erector de la espina dorsal.","Aductores.","Isquiotibiales.","Abdominales oblicuos y Abdominales frontales."],
        video: "https://www.youtube.com/embed/3uiWjik2yEQ"
      } as EjerciciosPublicos,
      {
        id: "3",
        tituloEjercicio: "Hip Thrust",
        tituloFoto: "Hip Thrust",
        foto: "../../../assets/img/hip-thrust.jpg",
        descripcion: "El hip thrust es uno de los ejercicios más usados para trabajar el tren inferior debido a la activación de la musculatura implicada en el movimiento. El hip thrust es usado para diferentes objetivos: mejorar el rendimiento deportivo, rehabilitación de lesiones, hipertrofia etc.",
        tituloSegundo: "Musculos trabajados en Hip Thrust",
        descripcionMusculos: ["Los extensores primarios de la cadera (glúteo mayor, isquiotibiales y algunas fibras del aductor mayor).","Los extensores secundarios de la cadera (aductores y fibras posteriores del glúteo medio y glúteo menor).", "Los estabilizadores de la columna (erectores espinales).", "Los flexo-extensores de la rodilla (recto femoral y vastos)."],
        video: "https://www.youtube.com/embed/zIIl1CINi84"
      } as EjerciciosPublicos,
      {
        id: "4",
        tituloEjercicio: "Cruces con polea alta",
        tituloFoto: "Cruces con polea alta",
        foto: "../../../assets/img/cruces.jpg",
        descripcion: "Los cruces con polea alta suelen ser más utilizados que los cruces desde polea baja. De pie, agarramos cada una de las anillas con cada mano y las bajamos hasta la altura de la cadera para nuevamente subirlas controlando el movimiento hasta la posición inicial.",
        tituloSegundo: "Musculos trabajados en Cruces con polea alta",
        descripcionMusculos: ["Deltoides Anterior.","Pectoral Mayor (Superior).", "Pectoral Mayor (Inferior).", "Biceps Braquial."],
        video: "https://www.youtube.com/embed/3hBloob8efo"
      } as EjerciciosPublicos,
      {
        id: "5",
        tituloEjercicio: "Extensión de tríceps",
        tituloFoto: "Extensión de tríceps",
        foto: "../../../assets/img/ext.jpg",
        descripcion: "Las extensiones tríceps en polea con agarre invertido son ejercicios que representan una variante de los clásicos ejercicios de polea, para el desarrollo de los músculos de los brazos. Esta variante, es particularmente efectiva al momento de entrenar los tríceps y los músculos de los antebrazos.",
        tituloSegundo: "Musculos trabajados en Extensión de tríceps",
        descripcionMusculos: ["Triceps (Vasto externo).","Triceps (Vasto larga).", "Triceps (Vasto interno)."],
        video: "https://www.youtube.com/embed/FspY_qJBXZc"
      } as EjerciciosPublicos,
    ]
  }
  ngOnInit(): void {
  }
}

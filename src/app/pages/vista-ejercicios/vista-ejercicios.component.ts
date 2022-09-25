import { Component, OnInit } from '@angular/core';
import {VistaEjercicios} from '../../services/VistaEjercicio/vista-ejercicios.type';
import {VistaEjerciciosService} from '../../services/VistaEjercicio/vista-ejercicios.service';

@Component({
  selector: 'app-vista-ejercicios',
  templateUrl: './vista-ejercicios.component.html',
  styleUrls: ['./vista-ejercicios.component.scss']
})
export class VistaEjerciciosComponent implements OnInit {
  arrayEjercicios:VistaEjercicios[] = []
  constructor(private arrayEjerciciosAux:VistaEjerciciosService) { 
  }
  ngOnInit(): void {
    this.arrayEjercicios = this.arrayEjerciciosAux.arregloVistaEjercicio;
  }
}

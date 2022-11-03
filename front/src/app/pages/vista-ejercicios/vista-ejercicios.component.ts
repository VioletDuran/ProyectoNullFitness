import { Component, OnInit } from '@angular/core';
import {VistaEjercicios} from '../../services/VistaEjercicio/vista-ejercicios.type';
import {VistaEjerciciosService} from '../../services/VistaEjercicio/vista-ejercicios.service';
import {EjerciciosPublicos} from "../../services/ejercicios-publicos.type";
import {EjerciciosPublicosService} from "../../services/ejercicios-publicos.service";
import { ActivatedRoute } from '@angular/router';
import {DomSanitizer,SafeResourceUrl,} from '@angular/platform-browser';
import { Router } from '@angular/router';

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

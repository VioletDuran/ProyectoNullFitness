import { Component, OnInit } from '@angular/core';
import {EjerciciosPublicos} from "../../services/ejercicios-publicos.type";
import {EjerciciosPublicosService} from "../../services/ejercicios-publicos.service";
import { ActivatedRoute } from '@angular/router';
import {DomSanitizer,SafeResourceUrl,} from '@angular/platform-browser';

@Component({
  selector: 'app-ejercicio',
  templateUrl: './ejercicio.component.html',
  styleUrls: ['./ejercicio.component.scss']
})


export class EjercicioComponent implements OnInit {
  
  ejerciciopublicoUnico: EjerciciosPublicos[] = [];
  ejercicioEspecifico: EjerciciosPublicos = {
    id:"",
    tituloEjercicio:"",
    tituloFoto:"",
    foto:"",
    descripcion:"",
    tituloSegundo: "",
    descripcionMusculos: [],
    video: ""
  };

  url: string = "";
  urlSafe: SafeResourceUrl = "";
  constructor(private ejerciciospublicos:EjerciciosPublicosService, private _route:ActivatedRoute, public sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.ejerciciopublicoUnico = this.ejerciciospublicos.ejerciciosPublicos;
    this.ejercicioEspecifico = this.obtenerObjeto(this.ejerciciospublicos.ejerciciosPublicos);
    this.url = this.ejercicioEspecifico.video;
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }
  
  obtenerObjeto(aux: EjerciciosPublicos[]){
    let auxObjeto;
    for(let i = 0; i < aux.length; i++){
      if(aux[i].id == this._route.snapshot.paramMap.get('id')){
        auxObjeto = aux[i];
      }
    }
    if(auxObjeto != undefined){
      return auxObjeto;
    }
    return {
      id:"",
      tituloEjercicio:"",
      tituloFoto:"",
      foto:"",
      descripcion:"",
      tituloSegundo: "",
      descripcionMusculos: [],
      video: ""
    };
  }
}

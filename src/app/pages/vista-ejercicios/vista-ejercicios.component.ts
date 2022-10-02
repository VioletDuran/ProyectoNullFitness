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
  obtenerid:string | null = "";
  constructor(private arrayEjerciciosAux:VistaEjerciciosService, private arrayEjerciciosPublicosAux:EjerciciosPublicosService, private _route:ActivatedRoute,private router: Router) { 
  }
  ngOnInit(): void {
    this.obtenerid = this._route.snapshot.paramMap.get('id');
    if(this._route.snapshot.paramMap.get('id') == "0"){
      this.arrayEjercicios = this.arrayEjerciciosAux.arregloVistaEjercicio;
    }else{
      this.arrayEjercicios = this.arrayEjerciciosPublicosAux.ejerciciosPublicos;
    }
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }
}

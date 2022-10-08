import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { vistaPerfil } from 'src/app/services/VistaPerfil/vista-perfil.type';
import { VistaPerfilService } from 'src/app/services/VistaPerfil/vista-perfil.service';
import {EjerciciosPublicos} from "../../services/ejercicios-publicos.type";
import { EjerciciosPublicosService } from 'src/app/services/ejercicios-publicos.service';

@Component({
  selector: 'app-mis-ejercicios',
  templateUrl: './mis-ejercicios.component.html',
  styleUrls: ['./mis-ejercicios.component.scss']
})
export class MisEjerciciosComponent implements OnInit {

  ejerciciosUsuario : EjerciciosPublicos[] | any = [];
  ejerciciosTotales : EjerciciosPublicos[] = [];
  rutinasTotales : vistaPerfil[] = [];
  rutinaActual : vistaPerfil | any = "";

  constructor(private _route:ActivatedRoute,private router: Router, private ejerciciosArray:EjerciciosPublicosService, private rutinasArray:VistaPerfilService) { }

  ngOnInit(): void {
    this.rutinasTotales = this.rutinasArray.arrayRutinas;
    this.ejerciciosTotales = this.ejerciciosArray.ejerciciosPublicos;
    this.generarEjercicios();
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  generarEjercicios(){
    for(let aux of this.rutinasTotales){
      if(aux.idRutina == this._route.snapshot.paramMap.get('id')){
        let rutinaAux = aux;
        this.rutinaActual = aux;
        for(let auxEjercicio of rutinaAux.ejercicios){
          console.log(this.ejerciciosTotales.find(ejercicio => ejercicio.id === auxEjercicio));
          this.ejerciciosUsuario.push(this.ejerciciosTotales.find(ejercicio => ejercicio.id === auxEjercicio));
        }
      }
    }
  }

}

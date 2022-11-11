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
  ejerciciosTotales : EjerciciosPublicos[] | any = [];
  rutinaActual : vistaPerfil | any = "";
  rutinaTotales : vistaPerfil[] | any = "";

  constructor(private _route:ActivatedRoute,private router: Router, private ejerciciosArray:EjerciciosPublicosService, private rutinasArray:VistaPerfilService) { }

  ngOnInit(): void {
    this.rutinasArray.devolverRutinas().subscribe((valor) =>{
      this.rutinaTotales = valor;
      console.log(valor);
      this.rutinaActual = this.rutinasArray.encontrarRutina(this._route.snapshot.paramMap.get('id'),this.rutinaTotales);
    })
    this.ejerciciosArray.devolverEjercicios().subscribe((valor) => {
      this.ejerciciosTotales = valor;
      this.ejerciciosUsuario = this.ejerciciosArray.retornarEjerciciosPrivados(this.rutinaActual.ejercicios,this.ejerciciosTotales);
    })
    //this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }


}

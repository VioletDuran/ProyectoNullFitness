import { Component, OnInit } from '@angular/core';
import {EjerciciosPublicos} from "../../services/ejercicios-publicos.type";
import {EjerciciosPublicosService} from "../../services/ejercicios-publicos.service";

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent implements OnInit {

  ejerciciopublico: EjerciciosPublicos[] = [];

  constructor(private ejerciciospublicos:EjerciciosPublicosService) { }

  ngOnInit(): void {
    this.ejerciciopublico = this.ejerciciospublicos.ejerciciosPublicos;
  }

}

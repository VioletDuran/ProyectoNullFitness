import { Component, OnInit } from '@angular/core';
import {VistaRutinas} from '../../services/vistaRutinas/rutinas-publicas.type';
import {RutinasPublicasService} from '../../services/vistaRutinas/rutinas-publicas.service';

@Component({
  selector: 'app-vista-rutinas',
  templateUrl: './vista-rutinas.component.html',
  styleUrls: ['./vista-rutinas.component.scss']
})
export class VistaRutinasComponent implements OnInit {

  arrayRutinas:VistaRutinas[] = []
  constructor(private arrayRutinasAux:RutinasPublicasService) { 
  }
  ngOnInit(): void {
    this.arrayRutinas = this.arrayRutinasAux.arregloRutinas;
  }

}

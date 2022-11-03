import { Component, OnInit } from '@angular/core';
import { VistaPerfilService } from 'src/app/services/VistaPerfil/vista-perfil.service';
import { vistaPerfil } from 'src/app/services/VistaPerfil/vista-perfil.type';

@Component({
  selector: 'app-mi-perfil',
  templateUrl: './mi-perfil.component.html',
  styleUrls: ['./mi-perfil.component.scss']
})
export class MiPerfilComponent implements OnInit {
  arrayMostrar:vistaPerfil[] = [];
  constructor(private arrayMostrarAux:VistaPerfilService) { }

  ngOnInit(): void {
    this.arrayMostrarAux.devolverRutinas().subscribe((valor) =>{
      this.arrayMostrar = valor;
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { VistaPerfilService } from 'src/app/services/VistaPerfil/vista-perfil.service';
import { vistaPerfil } from 'src/app/services/VistaPerfil/vista-perfil.type';
import { ServicioLoginService } from 'src/app/services/Login/servicio-login.service';
import { Usuario } from 'src/app/services/Login/servicio-login.type';
import Swal from 'sweetalert2';
import {Router} from "@angular/router";

@Component({
  selector: 'app-mi-perfil',
  templateUrl: './mi-perfil.component.html',
  styleUrls: ['./mi-perfil.component.scss']
})
export class MiPerfilComponent implements OnInit {
  arrayMostrar:vistaPerfil[] = [];
  Usuario: Usuario | any;
  estadoUsuario: any;
  constructor(private arrayMostrarAux:VistaPerfilService, private estado:ServicioLoginService, private router:Router) { }

  ngOnInit(): void {
    if(this.estado.isLoggedIn == false){
      Swal.fire({
        title: 'No estas logeado',
        text: 'Porfavor inicia sesion para entrar a tu perfil.',
        icon: 'error',
        confirmButtonText: 'Aceptar',
        confirmButtonColor: '#6D0101'
      })
      this.router.navigate(['']);
    }
    this.Usuario = this.estado.usuario;
    this.arrayMostrarAux.devolverRutinas().subscribe((valor) =>{
      this.arrayMostrar = valor;
    })
  }

  editarInformacion(){
    Swal.fire({
      title: "Informacion de usuario",
      text: "Ingresa la informacion para editar.",
      html: `<form>
             <input type="number" class="form-control" placeholder="edad">
             <hr>
             <input type="number" class="form-control" placeholder="peso">
             <hr>
             <input type="text" class="form-control" placeholder="nacionalidad">
             <hr>
             <input type="text" class="form-control" placeholder="contextura">
             <hr>
             <input type="text" class="form-control" placeholder="objetivo">
             <hr>
             <input type="number" class="form-control" placeholder="cantidad de ejercicio por semana">
      </form>
      `,
      showCancelButton: true,
      confirmButtonText: 'Confirmar',
      confirmButtonColor: '#6D0101',
      cancelButtonText: 'Cancelar'
    })
  }


}

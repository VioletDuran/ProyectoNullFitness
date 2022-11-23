import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { ServicioLoginService } from 'src/app/services/Login/servicio-login.service';
import Swal from 'sweetalert2';
import { usuarioFinal } from 'src/app/services/VistaPerfil/vista-perfil.type';
import { AdministradorService } from 'src/app/services/servicioAdmin/administrador.service';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.scss']
})
export class AdministradorComponent implements OnInit {
  Usuario: usuarioFinal | any = {
    idusuario : "", 
    nombreusuario : "", 
    edad : "", 
    peso : "", 
    nacionalidad : "", 
    contextura : "", 
    objetivo : "", 
    cantidad_ejercicio : "",
    foto: ""
  };
  datosCargados:Boolean = false;

  constructor(private login:ServicioLoginService, private router:Router, private servicio:AdministradorService) { }

  ngOnInit(): void {
    this.login.loggedIn();
    if(!this.login.isLoggedIn){
      this.router.navigate(['']);
      Swal.fire({
        title: 'No estas logeado',
        text: 'Porfavor inicia sesion para entrar a tu administrador.',
        icon: 'error',
        confirmButtonText: 'Aceptar',
        confirmButtonColor: 'green'
      })
    }
    if(this.login.tipoUsuario != "2"){
        this.router.navigate(['']);
        Swal.fire({
          title: 'Debes ser administrador para entrar aqui',
          icon: 'error',
          confirmButtonText: 'Aceptar',
          confirmButtonColor: 'green'
        })
    }
    
  }

}

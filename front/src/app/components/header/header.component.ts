import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ServicioLoginService } from 'src/app/services/Login/servicio-login.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private login:ServicioLoginService, private router:Router) { }

  ngOnInit(): void {
  }

  revisarEstado(){
    if(this.login.isLoggedIn == false){
      Swal.fire({
        title: 'No estas logeado',
        text: 'Porfavor inicia sesion para entrar a tu perfil.',
        icon: 'error',
        confirmButtonText: 'Aceptar',
        confirmButtonColor: 'green'
      })
    }else{
      this.router.navigate(['/MiPerfil']);
    }
  }

}

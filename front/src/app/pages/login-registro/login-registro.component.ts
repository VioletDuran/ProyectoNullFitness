import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import { ServicioLoginService } from 'src/app/services/Login/servicio-login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login-registro',
  templateUrl: './login-registro.component.html',
  styleUrls: ['./login-registro.component.scss']
})
export class LoginRegistroComponent implements OnInit {
  formularioLogin!: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private login: ServicioLoginService) {
  }

  ngOnInit(): void {
    let formulario = {
      correo: ['', Validators.compose([
        Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),
        Validators.required
      ])],
      contraseña: ['', Validators.compose([
        Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/),
        Validators.required
      ])]
    }
    this.formularioLogin = this.formBuilder.group(formulario);

  }
  iniciarSesion() {
    let datos = this.formularioLogin.value;
    if (this.formularioLogin.status === 'VALID') {
      this.login.devolverLogin({correo: datos.correo, contraseña: datos.contraseña}).subscribe((valor) => {
        if(valor == true){
          Swal.fire({
            title: 'Inicio de sesion exitoso!',
            text: 'Iniciaste de forma correcta.',
            icon: 'success',
            confirmButtonText: 'Aceptar',
            confirmButtonColor: '#00a000'
          })
          this.router.navigate(['']);
        }else{
          Swal.fire({
            title: 'Error!',
            text: 'Correo o contraseña incorrectos.',
            icon: 'error',
            confirmButtonText: 'Aceptar',
            confirmButtonColor: "#6D0101"
          })
        }
      })
    }
  }
}

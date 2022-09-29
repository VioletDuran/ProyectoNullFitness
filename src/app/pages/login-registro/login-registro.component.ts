import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-registro',
  templateUrl: './login-registro.component.html',
  styleUrls: ['./login-registro.component.scss']
})
export class LoginRegistroComponent implements OnInit {
  formularioLogin: FormGroup = {} as FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {
  }

  ngOnInit(): void {
    let formulario = {
      correo: ['', Validators.compose([
        Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),
        Validators.required
      ])],
      password: ['', Validators.compose([
        Validators.pattern(/^.{8,}$/),
        Validators.required
      ])]
    }
    this.formularioLogin = this.formBuilder.group(formulario);

  }
  iniciarSesion() {
    console.log(this.formularioLogin.status);
    if (this.formularioLogin.status === 'VALID') {
      this.router.navigate([''])
    }
  }
}

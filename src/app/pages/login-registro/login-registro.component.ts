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
      correo: ['', Validators.required],
      password: ['', Validators.compose([
        Validators.pattern(/^.{5,}$/),
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

import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {
    formularioRegistro: FormGroup = {} as FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router) {
  }

  ngOnInit(): void {
    let formulario = {
      nombreRealUsuario: ['', Validators.compose([
        Validators.pattern(/^.{8,}$/),
          Validators.required
      ])],
      nombreUsuario: ['', Validators.compose([
          Validators.pattern(/^.{8,}$/),
          Validators.required
      ])],
      edad: ['', Validators.compose([
          Validators.pattern(/^.{8,}$/),
          Validators.required
      ])],
      correo: ['', Validators.compose([
          Validators.pattern(/^.{8,}$/),
          Validators.required
      ])],
      password: ['', Validators.compose([
          Validators.pattern(/^.{8,}$/),
          Validators.required
      ])]
    }
    this.formularioRegistro = this.formBuilder.group(formulario);

  }
  registrarse(){
    console.log(this.formularioRegistro.status);
    if (this.formularioRegistro.status === 'VALID') {
      this.router.navigate([''])
    }
  }

}

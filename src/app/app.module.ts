import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainpageComponent } from './pages/mainpage/mainpage.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { VistaEjerciciosComponent } from './pages/vista-ejercicios/vista-ejercicios.component';
import { VistaRutinasComponent } from './pages/vista-rutinas/vista-rutinas.component';
import { MiPerfilComponent } from './pages/mi-perfil/mi-perfil.component';
import { EjercicioComponent } from './pages/ejercicio/ejercicio.component';
import { LoginRegistroComponent } from './pages/login-registro/login-registro.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    HeaderComponent,
    FooterComponent,
    VistaEjerciciosComponent,
    VistaRutinasComponent,
    MiPerfilComponent,
    EjercicioComponent,
    LoginRegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

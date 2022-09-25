import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainpageComponent } from './pages/mainpage/mainpage.component';
import { VistaEjerciciosComponent } from './pages/vista-ejercicios/vista-ejercicios.component';
import { VistaRutinasComponent } from './pages/vista-rutinas/vista-rutinas.component';
import { MiPerfilComponent } from './pages/mi-perfil/mi-perfil.component';
import { EjercicioComponent } from './pages/ejercicio/ejercicio.component';

const routes: Routes = [
  {path:'',component:MainpageComponent},
  {path:'Ejercicios',component:VistaEjerciciosComponent},
  {path:'Rutinas',component:VistaRutinasComponent},
  {path:'MiPerfil',component:MiPerfilComponent},
  {path:'Ejercicio/:id',component:EjercicioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

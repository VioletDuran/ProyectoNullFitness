import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainpageComponent } from './pages/mainpage/mainpage.component';
import { VistaEjerciciosComponent } from './pages/vista-ejercicios/vista-ejercicios.component';

const routes: Routes = [
  {path:'',component:MainpageComponent},
  {path:'Ejercicios',component:VistaEjerciciosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

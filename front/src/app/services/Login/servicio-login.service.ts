import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from './servicio-login.type';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class ServicioLoginService {
  url:string = "http://localhost:3000/users";
  usuario: Usuario = {
    idusuario : "",
    nombreusuario : "",
    edad : "",
    nombre : "",
    peso : "",
    nacionalidad : "",
    contextura : "",
    objetivo : "",
    cantidad_ejercicio : ""
  };
  isLoggedIn:boolean = false;
  helper = new JwtHelperService();
  
  constructor(private httpClient:HttpClient) { }


  //devolverLogin(usuario:any): Observable<any> {
  //  return this.httpClient.post(this.url +'/login',usuario);
  //}

  

  async devolverLogin(correo:any,contraseña:any){
    const url = this.url +'/login';
      try{
        var request = await fetch(url, {
          mode: 'cors',
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          'body': JSON.stringify({"correo": correo, "contraseña": contraseña})
        });
        
        let body = await request.json()
        if (request.status == 400) {
          return false
        }
        const decodedToken = this.helper.decodeToken(body.token);
        this.usuario.idusuario = decodedToken.data.idusuario;
        this.usuario.nombreusuario = decodedToken.data.nombreusuario;
        this.usuario.edad = decodedToken.data.edad;
        this.usuario.nombre = decodedToken.data.nombre;
        this.isLoggedIn = true;
        localStorage.setItem('token', body.token);
        return true;
      } catch(error) {
        console.log('error fetch', error)
        return false;
      }
  }

  logout() {
    localStorage.removeItem('token');
  }
  
  loggedIn():any {
    const token =  localStorage.getItem('token') ?? '';
    if (this.helper.isTokenExpired(token) == true) {
      this.logout;
      return false
    }
    return true;
  }

}

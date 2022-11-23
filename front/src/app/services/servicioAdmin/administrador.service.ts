import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AdministradorService {
  urlHttp:string = 'http://localhost:3000/users';
  constructor(private httpClient:HttpClient) { }
  
  cargarDatos(idusuario:string): Observable<any> {
    return this.httpClient.get(this.urlHttp+'/devolverDatos'+`/${idusuario}`)
  }

}

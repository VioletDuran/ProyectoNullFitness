import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioLoginService {
  url:string = "http://localhost:3000/users"
  constructor(private httpClient:HttpClient) { }
  devolverLogin(usuario:any): Observable<any> {
    return this.httpClient.post(this.url +'/login',usuario);
  }
}

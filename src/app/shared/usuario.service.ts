import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private url: string = "http://localhost:3000/";
  public logueado: boolean = false;
  public usuario: Usuario;

  constructor( private http:HttpClient  ) { }

  register( usuario: Usuario ){
    return this.http.post(this.url +"registro", usuario);
  }

  login( usuario: Usuario ){
    return this.http.post(this.url + "login", usuario);
  }

}

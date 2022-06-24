import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../shared/usuario.service';
import { Usuario } from '../../models/usuario';

@Component({
  selector: 'app-formulario-registro',
  templateUrl: './formulario-registro.component.html',
  styleUrls: ['./formulario-registro.component.css']
})
export class FormularioRegistroComponent implements OnInit {

  constructor(public usuarioService: UsuarioService) { }

  ngOnInit(): void {
  }

  registrarse(nombre: string, apellidos: string, correo: string, 
              url: string, password1: string, password2: string)
  {
    if( password1 === password2 ){
      let usuario: Usuario = new Usuario(nombre, apellidos, correo, url, password1)
      this.usuarioService.register( usuario );
    }
    else{
      console.log("Las contraseñas no coinciden");
    }
    
  }

}

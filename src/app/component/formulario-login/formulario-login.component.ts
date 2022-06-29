import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../shared/usuario.service';
import { Usuario } from '../../models/usuario';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-formulario-login',
  templateUrl: './formulario-login.component.html',
  styleUrls: ['./formulario-login.component.css']
})
export class FormularioLoginComponent implements OnInit {

  public usuario: Usuario;

  constructor( public usuarioService: UsuarioService,
                public router: Router ) {

    this.usuario = new Usuario(null, null, null, null, null);

  }

  login(){

    console.log("Hola");

    // let usuario: Usuario = new Usuario("", "", correo, "", password);

    this.usuarioService.login(this.usuario)
    .subscribe(( data:any ) => {

      console.log(data);

      this.usuarioService.logueado = true;
      this.usuarioService.usuario = data.result[0];

      console.log(this.usuarioService.usuario);

      if( data.error == false ){
        this.router.navigateByUrl('/libros');
      }

    })

  }

  ngOnInit(): void {
  }

}

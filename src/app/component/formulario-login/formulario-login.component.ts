import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../shared/usuario.service';
import { Usuario } from '../../models/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario-login',
  templateUrl: './formulario-login.component.html',
  styleUrls: ['./formulario-login.component.css']
})
export class FormularioLoginComponent implements OnInit {

  constructor( public usuarioService: UsuarioService,
                public router: Router ) { }

  login(correo: string, password: string){

    let usuario: Usuario = new Usuario("", "", correo, "", password);

    this.usuarioService.login(usuario)
    .subscribe(( data:any ) => {

      console.log(data);
      // console.log( data[0].result );

      // console.log( data[0] )

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

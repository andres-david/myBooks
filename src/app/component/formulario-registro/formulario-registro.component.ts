import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../shared/usuario.service';
import { Usuario } from '../../models/usuario';

@Component({
  selector: 'app-formulario-registro',
  templateUrl: './formulario-registro.component.html',
  styleUrls: ['./formulario-registro.component.css']
})
export class FormularioRegistroComponent implements OnInit {

  public usuario: Usuario;

  public passwordTwo: string;

  constructor(public usuarioService: UsuarioService) {
    this.usuario = new Usuario(null, null, null, null, null);
   }

  ngOnInit(): void {
  }

  registrarse()
  {

    if( this.usuario.password == this.passwordTwo ){
      

      this.usuarioService.register( this.usuario )
      .subscribe( ( data ) => {
        
        console.log( data );

      })
      
    }
    else{
      console.log("Las contraseñas no coinciden");
    }
    
  }

}

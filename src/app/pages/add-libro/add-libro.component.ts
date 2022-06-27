import { Component, OnInit } from '@angular/core';
import { Libro } from '../../models/libro';
import { ServicioService } from '../../shared/servicio.service';
import { Usuario } from '../../models/usuario';
import { UsuarioService } from '../../shared/usuario.service';


@Component({
  selector: 'app-add-libro',
  templateUrl: './add-libro.component.html',
  styleUrls: ['./add-libro.component.css']
})
export class AddLibroComponent implements OnInit {

  public libro: Libro;

  public nuLibro: Libro;

  public usuario: Usuario;

  constructor(public servicioService: ServicioService, public usuarioService:UsuarioService) {

    this.usuario = this.usuarioService.usuario;
    
   }

  enviar(id_libro: string, titulo: string, 
        tipo: string, autor: string, precio: string, url: string)
  {
    this.nuLibro = new Libro(Number(id_libro), this.usuario.id_usuario, 
                            titulo, tipo, autor, Number(precio), url);

    console.log( this.nuLibro );

    console.log("usuario")

    console.log( this.usuario );

    this.servicioService.add( this.nuLibro )
    .subscribe( data => {
      console.log( data );
    })

    let form = <HTMLFormElement>document.querySelector('.formulario');

    form.reset();
  }

  ngOnInit(): void {
  }

}

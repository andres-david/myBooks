import { Component, OnInit } from '@angular/core';
import { Libro } from '../../models/libro';
import { ServicioService } from '../../shared/servicio.service';
import { Usuario } from '../../models/usuario';
import { UsuarioService } from '../../shared/usuario.service';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {

  public libros: Libro[] = [];
  public usuario: Usuario;

  constructor(public servicioService: ServicioService, public usurarioService: UsuarioService) { 

      // this.libros = [
      //   new Libro(1, 1, "La Bruja", "Tapa Dura", "Germán Castro Caicedo", 20, "../../../assets/imgs/laBruja.jpg"),
      //   new Libro(2, 2, "Cien Años de Soledad", "Tapa Dura", "Gabriel García Márquez", 28, "../../../assets/imgs/cienAnios.jpg"),
      //   new Libro(2, 2, "Cien Años de Soledad", "Tapa Dura", "Gabriel García Márquez", 28, "../../../assets/imgs/cienAnios.jpg"),
      //   new Libro(2, 2, "Cien Años de Soledad", "Tapa Dura", "Gabriel García Márquez", 28, "../../../assets/imgs/cienAnios.jpg"),
      //   new Libro(2, 2, "Cien Años de Soledad", "Tapa Dura", "Gabriel García Márquez", 28, "../../../assets/imgs/cienAnios.jpg"),
      //   new Libro(2, 2, "Cien Años de Soledad", "Tapa Dura", "Gabriel García Márquez", 28, "../../../assets/imgs/cienAnios.jpg"),
      //   new Libro(2, 2, "Cien Años de Soledad", "Tapa Dura", "Gabriel García Márquez", 28, "../../../assets/imgs/cienAnios.jpg"),
      // ]

      // this.libros = servicioService.getAll();

      this.usuario = usurarioService.usuario;

  }

  enviar(id_libro: string)
  {

    if( id_libro ){

    //   this.libros = [this.servicioService.getOne( Number(id_libro) )];

    console.log(id_libro)

      this.servicioService.getOne( this.usuario.id_usuario, Number(id_libro) )
      .subscribe( (data: Libro[]) => {

        console.log(id_libro);
        this.libros = [];

        for( let i = 0; i < data.length; i++ ){
          if( data[i].id_libro == Number(id_libro) ){
            this.libros.push(data[i])
          }
        }

      })

    }
    else{

      this.libros = [];

      this.servicioService.getAll( this.usuario.id_usuario )
      .subscribe( (data: Libro[]) => {
        
        for( let i = 0; i < data.length; i++ ){
          this.libros.push(data[i]);
        }

      })

    }
    

    // let form = <HTMLFormElement>document.querySelector('.formulario');

    // form.reset();

  }

  delete( id_libro: number ){

    console.log(id_libro);

    this.servicioService.delete(id_libro)
    .subscribe( data => {
      console.log( data );
    })

  }

  ngOnInit(): void {
  }

  



}

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

  public libros: Libro[];
  public usuario: Usuario;

  constructor(public servicioService: ServicioService, public usurarioService: UsuarioService) { 

    this.usuario = usurarioService.usuario;

  }

  enviar(id_libro: string)
  {

    if( id_libro ){

    console.log(id_libro)

      this.servicioService.getOne( this.usuario.id_usuario, Number(id_libro) )
      .subscribe( (data: Libro[]) => {

        console.log(data);

        this.libros = data;

      })

    }
    else{

      // this.libros = [];

      this.servicioService.getAll( this.usuario.id_usuario )
      .subscribe( (data: Libro[]) => {

        console.log(data);

        this.libros = data;

      })

    }

  }

  delete( id_libro: number ){

    for(let i=0; i<this.libros.length; i++){
      
      let ind = 0;

      if(this.libros[i].id_libro == id_libro){
        ind = this.libros.indexOf(this.libros[i])
        
        console.log(ind);

        this.libros.splice(ind, 1);
      }


    }

    console.log(id_libro);

    this.servicioService.delete(id_libro)
    .subscribe( data => {
      console.log( data );
    })

  }

  ngOnInit(): void {
  }

  



}

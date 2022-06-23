import { Injectable } from '@angular/core';
import { Libro } from '../models/libro';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  private libros: Libro[]

  constructor() {

    this.libros = [
      new Libro(1, 1, "La Bruja", "Tapa Dura", "Germán Castro Caicedo", 20, "../../../assets/imgs/laBruja.jpg"),
      new Libro(2, 2, "Cien Años de Soledad", "Tapa Dura", "Gabriel García Márquez", 28, "../../../assets/imgs/cienAnios.jpg"),
      new Libro(2, 2, "Cien Años de Soledad", "Tapa Dura", "Gabriel García Márquez", 28, "../../../assets/imgs/cienAnios.jpg"),
      new Libro(2, 2, "Cien Años de Soledad", "Tapa Dura", "Gabriel García Márquez", 28, "../../../assets/imgs/cienAnios.jpg"),
      new Libro(2, 2, "Cien Años de Soledad", "Tapa Dura", "Gabriel García Márquez", 28, "../../../assets/imgs/cienAnios.jpg"),
      new Libro(2, 2, "Cien Años de Soledad", "Tapa Dura", "Gabriel García Márquez", 28, "../../../assets/imgs/cienAnios.jpg"),
      new Libro(2, 2, "Cien Años de Soledad", "Tapa Dura", "Gabriel García Márquez", 28, "../../../assets/imgs/cienAnios.jpg"),
    ];

  }

  getAll():Libro[]{
    return this.libros;
  }

  getOne( id_libro: number ): Libro{

    let libro: Libro;

    for( let i = 0; i < this.libros.length; i++ ){

      if( this.libros[i].id_libro = id_libro ){
        
        libro = this.libros[i];

        break;

      }

    }

    return libro;
  }

  add( libro: Libro ): void{
    this.libros.push( libro );
  }

  edit( libro: Libro ): boolean{

    let result: boolean;

    for( let i = 0; i < this.libros.length; i++ ){

      result = false;

      if( this.libros[i].id_libro == libro.id_libro ){

        libro.id_usuario ? this.libros[i].id_usuario = libro.id_usuario : this.libros[i].id_usuario;
        libro.titulo ? this.libros[i].titulo = libro.titulo : this.libros[i].titulo;
        libro.tipoLibro ? this.libros[i].tipoLibro = libro.tipoLibro : this.libros[i].tipoLibro;
        libro.autor ? this.libros[i].autor = libro.autor : this.libros[i].tipoLibro;
        libro.precio ? this.libros[i].precio = libro.precio : this.libros[i].precio;
        libro.photo ? this.libros[i].photo = libro.photo : this.libros[i].photo;

        result = true;

        break;

      }

    }

    return result;
  }

  delete(id_libro: number): boolean{

    let result: boolean = false;

    for( let i = 0; i < this.libros.length; i++ ){

      if( this.libros[i].id_libro == id_libro ){

        this.libros.splice( i, 1 );

        result = true;

        break;

      }

    }

    return result;

  }

}

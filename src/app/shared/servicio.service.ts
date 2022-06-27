import { Injectable } from '@angular/core';
import { Libro } from '../models/libro';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  private libros: Libro[] = [];
  public url : string = "http://localhost:3000/libros";

  constructor( private http: HttpClient ) {

    // this.libros = [
      // new Libro(1, 1, "La Bruja", "Tapa Dura", "Germán Castro Caicedo", 20, "../../../assets/imgs/laBruja.jpg"),
      // new Libro(2, 2, "Cien Años de Soledad", "Tapa Dura", "Gabriel García Márquez", 28, "../../../assets/imgs/cienAnios.jpg"),
      // new Libro(2, 2, "Cien Años de Soledad", "Tapa Dura", "Gabriel García Márquez", 28, "../../../assets/imgs/cienAnios.jpg"),
      // new Libro(2, 2, "Cien Años de Soledad", "Tapa Dura", "Gabriel García Márquez", 28, "../../../assets/imgs/cienAnios.jpg"),
      // new Libro(2, 2, "Cien Años de Soledad", "Tapa Dura", "Gabriel García Márquez", 28, "../../../assets/imgs/cienAnios.jpg"),
      // new Libro(2, 2, "Cien Años de Soledad", "Tapa Dura", "Gabriel García Márquez", 28, "../../../assets/imgs/cienAnios.jpg"),
      // new Libro(2, 2, "Cien Años de Soledad", "Tapa Dura", "Gabriel García Márquez", 28, "../../../assets/imgs/cienAnios.jpg"),
    // ];

  }

  // getAll():Libro[]{
  //   return this.libros;
  // }

  getAll( id_usuario: number ):Observable<Object>{

    console.log("get all");

    return this.http.get(this.url + "?id_usuario=" + id_usuario);
    
  }

  // getOne( id_libro: number ): Libro{

  //   let libro: Libro;

  //   for( let i = 0; i < this.libros.length; i++ ){

  //     if( this.libros[i].id_libro == id_libro ){
        
  //       libro = this.libros[i];

  //       break;

  //     }

  //   }

  //   return libro;
  // }

  getOne(id_usuario: number, id_libro: number):Observable<Object>{

    // return this.http.get(this.url + "libros/" + id_libro);

    return this.http.get(this.url + "?id_libro=" + id_libro + "&id_usuario=" + id_usuario);
  
  }

  // add( libro: Libro ): void{
  //   this.libros.push( libro );
  // }

  add( libro:Libro ):Observable<Object>{
    return this.http.post(this.url, libro);
  }

  // edit( libro: Libro ): boolean{

  //   let result: boolean;

  //   for( let i = 0; i < this.libros.length; i++ ){

  //     result = false;

  //     if( this.libros[i].id_libro == libro.id_libro ){

  //       libro.id_usuario ? this.libros[i].id_usuario = libro.id_usuario : this.libros[i].id_usuario;
  //       libro.titulo ? this.libros[i].titulo = libro.titulo : this.libros[i].titulo;
  //       libro.tipo ? this.libros[i].tipo = libro.tipo : this.libros[i].tipo;
  //       libro.autor ? this.libros[i].autor = libro.autor : this.libros[i].autor;
  //       libro.precio ? this.libros[i].precio = libro.precio : this.libros[i].precio;
  //       libro.foto ? this.libros[i].foto = libro.foto : this.libros[i].foto;

  //       result = true;

  //       break;

  //     }

  //   }

  //   return result;
  // }

  edit( libro: Libro ):Observable<Object>{
    
    return this.http.put( this.url, libro);
    
  }


  // delete(id_libro: number): boolean{

  //   let result: boolean = false;

  //   for( let i = 0; i < this.libros.length; i++ ){

  //     if( this.libros[i].id_libro == id_libro ){

  //       this.libros.splice( i, 1 );

  //       result = true;

  //       break;

  //     }

  //   }

  //   return result;

  // }


  delete(id_libro: number): Observable<Object> {

    return this.http.delete(this.url + "?id_libro=" + id_libro)

  }

}




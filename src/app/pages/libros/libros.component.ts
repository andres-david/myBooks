import { Component, OnInit } from '@angular/core';
import { Libro } from '../../models/libro';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {

  public libros: Libro[];

  constructor() { 

      this.libros = [
        new Libro(1, 1, "La Bruja", "Tapa Dura", "Germán Castro Caicedo", 20, "../../../assets/imgs/laBruja.jpg"),
        new Libro(2, 2, "Cien Años de Soledad", "Tapa Dura", "Gabriel García Márquez", 28, "../../../assets/imgs/cienAnios.jpg"),
        new Libro(2, 2, "Cien Años de Soledad", "Tapa Dura", "Gabriel García Márquez", 28, "../../../assets/imgs/cienAnios.jpg"),
        new Libro(2, 2, "Cien Años de Soledad", "Tapa Dura", "Gabriel García Márquez", 28, "../../../assets/imgs/cienAnios.jpg"),
        new Libro(2, 2, "Cien Años de Soledad", "Tapa Dura", "Gabriel García Márquez", 28, "../../../assets/imgs/cienAnios.jpg"),
        new Libro(2, 2, "Cien Años de Soledad", "Tapa Dura", "Gabriel García Márquez", 28, "../../../assets/imgs/cienAnios.jpg"),
        new Libro(2, 2, "Cien Años de Soledad", "Tapa Dura", "Gabriel García Márquez", 28, "../../../assets/imgs/cienAnios.jpg"),
      ]

  }

  enviar(id_libro: string, id_usuario: string, titulo: string, tipo: string, 
          autor: string, precio: string, url: string)
  {
    
    this.libros.push( new Libro(Number(id_libro), Number(id_usuario), titulo, tipo, autor, Number(precio), url) );

    let form = <HTMLFormElement>document.querySelector('.formulario');

    form.reset()

  }

  ngOnInit(): void {
  }

}

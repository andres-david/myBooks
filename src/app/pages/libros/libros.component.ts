import { Component, OnInit } from '@angular/core';
import { Libro } from '../../models/libro';
import { ServicioService } from '../../shared/servicio.service';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {

  public libros: Libro[];

  constructor(public servicioService: ServicioService) { 

      // this.libros = [
      //   new Libro(1, 1, "La Bruja", "Tapa Dura", "Germán Castro Caicedo", 20, "../../../assets/imgs/laBruja.jpg"),
      //   new Libro(2, 2, "Cien Años de Soledad", "Tapa Dura", "Gabriel García Márquez", 28, "../../../assets/imgs/cienAnios.jpg"),
      //   new Libro(2, 2, "Cien Años de Soledad", "Tapa Dura", "Gabriel García Márquez", 28, "../../../assets/imgs/cienAnios.jpg"),
      //   new Libro(2, 2, "Cien Años de Soledad", "Tapa Dura", "Gabriel García Márquez", 28, "../../../assets/imgs/cienAnios.jpg"),
      //   new Libro(2, 2, "Cien Años de Soledad", "Tapa Dura", "Gabriel García Márquez", 28, "../../../assets/imgs/cienAnios.jpg"),
      //   new Libro(2, 2, "Cien Años de Soledad", "Tapa Dura", "Gabriel García Márquez", 28, "../../../assets/imgs/cienAnios.jpg"),
      //   new Libro(2, 2, "Cien Años de Soledad", "Tapa Dura", "Gabriel García Márquez", 28, "../../../assets/imgs/cienAnios.jpg"),
      // ]

      this.libros = servicioService.getAll();

  }

  enviar(id_libro: string)
  {

    if( id_libro ){

      this.libros = [this.servicioService.getOne( Number(id_libro) )];

    }
    else{
      this.libros = this.servicioService.getAll();
    }

    let form = <HTMLFormElement>document.querySelector('.formulario');

    form.reset();

  }

  delete( id_libro: string ){

    this.servicioService.delete(Number(id_libro));

  }

  ngOnInit(): void {
  }

  



}

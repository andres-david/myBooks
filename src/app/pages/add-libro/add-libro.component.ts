import { Component, OnInit } from '@angular/core';
import { Libro } from '../../models/libro';
import { ServicioService } from '../../shared/servicio.service';

@Component({
  selector: 'app-add-libro',
  templateUrl: './add-libro.component.html',
  styleUrls: ['./add-libro.component.css']
})
export class AddLibroComponent implements OnInit {

  public libro: Libro;

  public nuLibro: Libro;

  constructor(public servicioService: ServicioService) { }

  enviar(id_libro: string, id_usuario: string, titulo: string, 
        tipo: string, autor: string, precio: string, url: string)
  {
    this.nuLibro = new Libro(Number(id_libro), Number(id_usuario), 
                            titulo, tipo, autor, Number(precio), url);

    this.servicioService.add( this.nuLibro );

    let form = <HTMLFormElement>document.querySelector('.formulario');

    form.reset();
  }

  ngOnInit(): void {
  }

}

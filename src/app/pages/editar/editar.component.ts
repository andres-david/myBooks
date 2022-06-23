import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../shared/servicio.service';
import { Libro } from '../../models/libro';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  public nuLibro: Libro;

  constructor(public servivioService: ServicioService) { }

  editar(id_libro: string, id_usuario: string, 
        titulo: string, tipo: string, autor: string, precio: string, url: string)
  {
    this.nuLibro = new Libro( Number(id_libro), Number(id_usuario), titulo, tipo, autor, Number(precio), url );

    this.servivioService.edit(this.nuLibro);

    let form = <HTMLFormElement>document.querySelector('.formulario');

    form.reset();
  }


  ngOnInit(): void {
  }

}

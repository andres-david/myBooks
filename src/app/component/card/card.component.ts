import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Libro } from 'src/app/models/libro';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input()libroPadre: Libro;
  @Input()evenPadre: boolean;
  @Output()eventDelete = new EventEmitter<number>();

  constructor() {
   }

  delete(id_libro: number){
    let id = id_libro;

    this.eventDelete.emit(id);
  }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  public miUsuario: Usuario;

  constructor() { 
    this.miUsuario = new Usuario("Filomena", "Hernandez", "filomena@filomena.com", "../../../assets/imgs/pain.jpg", "filomena123")
  }

  enviar(nombre: string, apellidos: string, correo: string, foto: string){
    this.miUsuario.nombre = nombre;
    this.miUsuario.apellidos = apellidos;
    this.miUsuario.correo = correo;
    this.miUsuario.foto = foto;
  }


  ngOnInit(): void {
  }

}

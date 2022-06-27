import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../../models/usuario';
import { UsuarioService } from '../../shared/usuario.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( private router: Router, public usuarioService: UsuarioService ) {

  }

  goLogin(){
    this.router.navigateByUrl('/login');
  }

  ngOnInit(): void {

  
  }

}

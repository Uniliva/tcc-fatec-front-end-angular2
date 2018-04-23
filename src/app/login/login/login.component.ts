import { Component, OnInit } from '@angular/core';

import { AuthService } from './../../services/auth.service';
import { Usuario } from './../../entidades/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario: Usuario = new Usuario();

  emailValido = false;
  senhaValido = false;
  dadosInvalidos = false;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  fazerLogin() {
    console.log("teste")
    this.dadosInvalidos = false;
    this.dadosInvalidos = this.authService.fazerLogin(this.usuario);  
  }

    mostrar() {
      this. dadosInvalidos = false;
    }

    validaCampo(campo) {
      if(campo.name == "senha"){
        this.senhaValido = !campo.valid && campo.touched;
      }else{
        this.emailValido = !campo.valid && campo.touched;
      }

  }

}

import { Component, OnInit, EventEmitter } from '@angular/core';
import { Usuario } from './../../entidades/usuario';
import { AuthService } from './../../services/auth.service';
import { UsuarioService } from './../../services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario: Usuario = new Usuario();

  emailValido ; senhaValido; dadosInvalidos; loading = false;

  constructor(private router: Router, private authService: AuthService, private usuarioService: UsuarioService) { }

  ngOnInit() { }

  fazerLogin() {
    this.loading = true;
    this.usuarioService.logar(this.usuario).subscribe(
           res => {
               this.authService.mostrarMenuEmitter.emit(true);
               this.router.navigate(['/status']);
               localStorage.setItem('user-status',  'LOGADO');
           },
           error => {
               this.authService.mostrarMenuEmitter.emit(false);
               this.dadosInvalidos = true;
               this.loading = false;
           }
       );
   }

  mostrar() {
    this.dadosInvalidos = false;
  }

  validaCampo(campo) {
    if (campo.name === 'senha') {
      this.senhaValido = !campo.valid && campo.touched;
    } else {
      this.emailValido = !campo.valid && campo.touched;
    }

  }

}

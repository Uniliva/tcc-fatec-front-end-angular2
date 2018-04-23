import { Router } from '@angular/router';

import { Injectable, EventEmitter } from '@angular/core';
import { Usuario } from './../entidades/usuario';


@Injectable()
export class AuthService {

    private usuarioAutenticado: Boolean = false;

    mostrarMenuEmitter = new EventEmitter<boolean>();
    constructor(private router: Router) { }

        fazerLogin(usuario: Usuario) {
            if (usuario.email === 'usuario@email.com' && usuario.senha === '123456') {
                this.usuarioAutenticado = true;
                this.mostrarMenuEmitter.emit(true);
                this.router.navigate(['/status']);
            } else {
                this.usuarioAutenticado = false;
                this.mostrarMenuEmitter.emit(false);
                return true;
            }
    }

    usuarioEstaAutenticado() {
        return this.usuarioAutenticado;
    }
}
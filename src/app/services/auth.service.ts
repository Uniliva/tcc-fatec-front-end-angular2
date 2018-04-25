import { Router } from '@angular/router';

import { Injectable, EventEmitter } from '@angular/core';
import { Usuario } from './../entidades/usuario';
import { UsuarioService } from './usuario.service';
import { mapChildrenIntoArray } from '@angular/router/src/url_tree';



@Injectable()
export class AuthService {
    mostrarMenuEmitter = new EventEmitter<boolean>();
    constructor() { }

 
}

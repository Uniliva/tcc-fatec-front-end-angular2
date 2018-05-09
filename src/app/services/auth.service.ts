import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class AuthService {
    mostrarMenuEmitter = new EventEmitter<boolean>();
    constructor() { }

    estaLogado(): boolean {
        status = localStorage.getItem('user-status');
        return status === 'LOGADO';
    }
}

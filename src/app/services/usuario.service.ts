import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';


import { Usuario } from './../entidades/usuario';

@Injectable()
export class UsuarioService {
  private api = environment.apiUrl;

  constructor(private _http:  HttpClient) { }

  novoUsuario(u: Usuario) {
    this._http.post(`${this.api}/usuarios/novo`, u);
  }

  logar(u: Usuario) {
    return this._http.post(`${this.api}/usuarios/login`, u);
  }



}

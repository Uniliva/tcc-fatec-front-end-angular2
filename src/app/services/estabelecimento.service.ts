import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Estabelecimento } from '../entidades/estabelecimento';


const api = environment.apiUrl + '/estabelecimentos';

@Injectable()
export class EstabelecimentoService {

  constructor(private _http: HttpClient) { }

  getLojas() {
    return this._http.get(`${api}/todos`);
  }

  getLojaporID(id: number) {
    return this._http.get(`${api}/id/${id}`);
  }

  atualizaLoja(loja: Estabelecimento) {
    return this._http.post<Estabelecimento>(`${api}/atualizar`, loja);
  }

  salvaLoja(loja: Estabelecimento) {
    return this._http.post(`${api}/novo`, loja);
  }

  adicionarSensor(idEstabelecimento: number, idSensor: number) {
    return this._http.post(`${api}/adicionar-sensor/${idEstabelecimento}/sensor/${idSensor}`, '');
  }

  removeSensor(idEstabelecimento: number, idSensor: number) {
    return this._http.post(`${api}/remove-sensor/${idEstabelecimento}/sensor/${idSensor}`, '');
  }

  removeLoja(id: number) {
    return this._http.delete(`${api}/id/${id}`);
  }

}

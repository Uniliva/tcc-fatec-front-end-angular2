import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';

@Injectable()
export class EstabelecimentoService {
  private api = environment.apiUrl;

  constructor(private _http: HttpClient) { }

  getLojas() {
    return this._http.get(`${this.api}/estabelecimentos/todos`);
  }

  getLojaporID(id: number) {
    return this._http.get(`${this.api}/estabelecimentos/id/${id}`);
  }

}

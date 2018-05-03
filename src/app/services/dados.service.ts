import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';


@Injectable()
export class DadosService {
  private api = environment.apiUrl;

  constructor(private _http: HttpClient) { }

  getSensores() {
    return this._http.get(`${this.api}/sensores/todos`);
  }

  getDadoSensor(idSensor, qtd) {
    return this._http.get(`${this.api}/dados/sensor/${idSensor}/quantidade/${qtd}`);
  }

  getDadoaSensorPorId(idSensor, qtd) {
    return this._http.get(`${this.api}/dados/sensor/graficos/${idSensor}/quantidade/${qtd}`);
  }

}

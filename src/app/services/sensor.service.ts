import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Sensor } from './../entidades/sensor';



const api = environment.apiUrl + '/sensores';

@Injectable()
export class SensorService {

  constructor(private _http: HttpClient) { }

  getSensores() {
    return this._http.get(`${api}/todos`);
  }

  getSensorporID(id: number) {
    return this._http.get(`${api}/id/${id}`);
  }

  atualizaSensor(sensor: Sensor) {
    sensor.temperaturaMax = parseFloat(sensor.temperaturaMax);
    sensor.temperaturaMin = parseFloat(sensor.temperaturaMin);
    return this._http.post<Sensor>(`${api}/atualizar`, sensor);
  }

  removeSensor(id: number) {
    return this._http.delete(`${api}/id/${id}`);
  }


}
